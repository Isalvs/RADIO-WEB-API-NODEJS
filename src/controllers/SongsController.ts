import { Request, Response } from 'express';
import knex from '../database/connection';

class SongsController {
    async index(request: Request, response: Response) {
        try {
            const res = await knex('songs').select('*');
            return response.json(res);

        } catch (e) {
            return response.json(e);
        }
    }
    async create(request: Request, response: Response) {
        const { userID, dedicated, music, name, reproduced, course } = request.body;
        if (userID == null) {
            return response.json({
                message: 'falta o id do user'
            })
        }
        if(course ==null){
            return response.json({
                message: 'falta o curso'
            }) 
        }
        if (dedicated == null) {
            return response.json({
                message: 'falta o campo dedicated'
            })
        }
        if (music == null) {
            return response.json({
                message: 'falta a musica'
            })
        }
        if (name == null) {
            return response.json({
                message: 'falta o nome'
            })
        }
        if (reproduced == null) {
            return response.json({
                message: 'falta o valor de reproducao'
            })
        }
        try {
            await knex('songs').insert({
                userID,
                dedicated,
                music,
                name,
                course,
                reproduced
            })
            return response.json({
                message: 'sucesso'
            })
        }
        catch (e) {
            return response.json({
                message: e
            })
        }


    }
}
export default SongsController;