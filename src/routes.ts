import express, { Response, Request } from 'express';
import UserController from './controllers/UserController';
import SongsController from './controllers/SongsController';
const routes = express.Router();

const userController = new UserController();
const songsController = new SongsController();

routes.get('/musics', songsController.index);
routes.post('/musics/create', songsController.create);

routes.get('/users', userController.index);
routes.get('/', (request: Request, response: Response)=>{
    response.send('API RADIO CORREDOR IFAC - ACESSO RESTRITO, VAZA !!!')
});
routes.post('/users/create', userController.create);

routes.post('/users/email_send', userController.sendEmail);
routes.post('/users/validation', userController.validationEmail);


export default routes;