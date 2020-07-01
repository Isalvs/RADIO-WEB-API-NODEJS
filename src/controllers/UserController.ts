import { Request, Response } from 'express';
import knex from '../database/connection';
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';
class UserController {
    async index(request: Request, response: Response) {
        try {
            const users = await knex('users').select('*');
            return response.json(users);
        } catch (e) {
            return response.json(e);
        }

    }
    async create(request: Request, response: Response) {
        const { course, email, name } = request.body;
        if (course == null) {
            return response.json({
                message: 'falta o curso'
            })
        }
        if (email == null) {
            return response.json({
                message: 'falta o email'
            })
        }
        if (name == null) {
            return response.json({
                message: 'falta o nome'
            })
        }
        await knex('users').where('email', email).select('email').then((e) => {
            if (String(e.map(res => res.email)) == email) {
                return response.json({
                    message: 'email existente',
                    email: String(e.map(res => res.email))
                })
            }
        })
        try {
            await knex('users').insert({
                course,
                email,
                name
            });
            const res = await knex('users').where('email', email).select('*');
            return response.json(res)
        }
        catch (e) {
            return response.json({
                message: e
            })
        }

    }

    async sendEmail(request: Request, response: Response) {
        const { email } = request.body;
        if (email == null) {
            return response.json({ message: 'not email', error: true })
        }
        var chars = 'acdefhiklmnoqrstuvwxyz0123456789'.split('');
        var result = '';
        for (var i = 0; i < 7; i++) {
            var x = Math.floor(Math.random() * chars.length);
            result += chars[x];
        }
        const code = result;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'querytena@gmail.com',
                pass: '1nf0rm4t1c4'
            }
        });
        const options = {
            from: 'querytena@gmail.com',
            to: `${email}`,
            subject: 'Código de acesso',
            text: `código ${code.toUpperCase()}`
        };
        transporter.sendMail(options, function (error, info) {
            if (error) {
                return response.json({ message: error, error: true })
            } else {
                bcrypt.hash(code, 10, function (err, hash) {
                    if (err == null) {
                        return response.json({
                            message: info.response,
                            hash: hash,
                            error: false
                        });
                    } else {
                        return response.json({ message: error, error: true });
                    }
                });
            }
        });

    }
    async validationEmail(request: Request, response: Response) {
        const { code, hash, email } = request.body;
       await bcrypt.compare(`${code}`, `${hash}`).then(res => {
            if (!res) {
                return response.json({
                    message: 'validator inválido'
                })
            }
        });

        const e = await knex('users').where('email', email).select('*');
        return response.json(e)

    }
}

export default UserController;



