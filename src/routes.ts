import express from 'express';
import UserController from './controllers/UserController';
import SongsController from './controllers/SongsController';
import ChatController from './controllers/ChatController';
const routes = express.Router();

const userController = new UserController();
const songsController = new SongsController();
const chatController = new ChatController();


routes.get('/musics', songsController.index);
routes.post('/musics/create', songsController.create);

routes.get('/users', userController.index);
routes.post('/users/create', userController.create);

routes.post('/users/email_send', userController.sendEmail);
routes.post('/users/validation', userController.validationEmail);

routes.get('/messages', chatController.index);
routes.post('/message/create', chatController.create);

export default routes;