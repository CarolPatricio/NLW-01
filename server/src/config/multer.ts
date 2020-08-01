import multer from 'multer';
import path from 'path';
import crypto from 'crypto'; //biblioteca nativa do node que gera um nome único para cada arquivo, gera um hash aleatório

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..','..', 'uploads'),
        filename(request, file, callback){
            const hash = crypto.randomBytes(6).toString('hex');

            const fileName = `${hash}-${file.originalname}`;

            callback(null, fileName);
        }
    }),
}