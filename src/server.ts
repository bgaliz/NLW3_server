import express from 'express';
//Obrigatório chamar o arquivo para startar a conexão com o banco.
import './database/connection';

import path from 'path';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.listen(3333);

