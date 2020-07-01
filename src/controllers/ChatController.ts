import { Request, Response } from 'express';
import knex from '../database/connection';

class ChatController {
    async index(request: Request, response: Response) {
        try {
            const res = await knex('roomchat').select('*').orderBy('created_at','desc');
            return response.json(res);

        } catch (e) {
            return response.json(e);
        }
    }
    async create(request: Request, response: Response) {
        const { userID, text, name } = request.body;
        if (userID == null) {
            return response.json({
                message: "falta o ID do user"
            })
        }
        if (text == null) {
            return response.json({
                message: "falta a mensagem"
            })
        }
        if (name == null) {
            return response.json({
                message: "falta o nome do user"
            })
        }
        await knex('roomchat').insert({
            userID,
            text,
            name
        }).then(() => {
            return response.json({
                message: "sucesso"
            })
        }).catch(e => {
            return response.json({
                message: e
            })
        })

    }
}
export default ChatController;