import { Router } from 'express';
import OrphanagesController from './controller/OrphanagesController';
import multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages:id', OrphanagesController.show());

export default routes;

// Banco
//Type ORM - ele deve manter todas as informações com as conexões com o banco de dados. Pesquisar documento de iniciação do ORM

// Driver nativo: Ex: Sqlite3
// Query Builder: Knex


// Objective Relational Mapping
// Relacionar objetos de código com tabelas