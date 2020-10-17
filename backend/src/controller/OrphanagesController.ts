/* importando o request e response do express */
import { Request, Response } from 'express';

/* importando a orphanage view */
import orphanageView from '../views/orphanages_view'

/* importando o getRepository */
import { getRepository } from 'typeorm';

/* importando o model */
import Orphanage from '../models/Orphanage';

/* importando o yup para as validações */
import * as Yup from 'yup'

export default {
    /* listando os orfanatos */
    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        })

        return response.json(orphanageView.renderMany(orphanages));

    },
    /* buscando um orfanato específico */
    async show(request: Request, response: Response) {
        const { id } = request.params

        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        })

        return response.json(orphanageView.render(orphanage));
    },

    /* criando um orfanato */
    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = request.body
    
        const orphanagesRepository = getRepository(Orphanage);

        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image => {
            return { path: image.filename }
        })

        
        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === 'true',
            images
        }

        /* criando as validações */
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                    Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        /* criando um novo orfanato */
        const orphanage = orphanagesRepository.create(data);
    
        /* salvando no banco de dados */
        await orphanagesRepository.save(orphanage);
        
        return response.status(201).json(orphanage);
    }
};

