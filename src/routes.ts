import express, { Response, Request } from 'express';
import UserController from './controllers/UserController';
import SongsController from './controllers/SongsController';
import knex from './database/connection';
const routes = express.Router();

const userController = new UserController();
const songsController = new SongsController();

routes.get('/musics', songsController.index);
routes.post('/musics/create', songsController.create);

routes.get('/users', userController.index);
routes.get('/', (request: Request, response: Response) => {
    response.send('API RADIO CORREDOR IFAC - ACESSO RESTRITO, VAZA !!!')
});
routes.post('/users/create', userController.create);

routes.get('/messages', (request: Request, response: Response) => {
    knex('messages').select('*').orderBy('id', 'desc').limit(200).then(res => {
        return response.json(res);
    })
})

routes.post('/users/email_send', userController.sendEmail);
routes.post('/users/validation', userController.validationEmail);


export default routes;