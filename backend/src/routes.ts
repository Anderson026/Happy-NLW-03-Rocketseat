/* importando o Router do express */
import { Router } from 'express';

/* importando o multer */
import multer from 'multer';

/* importando o config do multer */
import uploadConfig from './config/upload';

/* imprtando o controller */
import OrphanagesController from './controller/OrphanagesController'

/* instancianso o Router */
const routes = Router();
/* criando uma variável para o multer */
const upload = multer(uploadConfig);

/* rota para criar um orfanato */
routes.post('/orphanages',  upload.array('images'), OrphanagesController.create);
/* rota para listar os orfanatos */ 
routes.get('/orphanages', OrphanagesController.index); 
/* rota para buscar um orfanato específico */
routes.get('/orphanages/:id', OrphanagesController.show); 




export default routes;