/* importando o multer */
import { request } from 'express'
import multer from 'multer';

/* importando o path */
import path from 'path'

/* exportando a configuração do multer */
export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;

            cb(null, fileName);
        },
    })
}