import Knex from 'knex';

exports.seed = function (knex: Knex) {
    return knex('users').insert([
        {
            course: 'REDES DE COMPUTADORES',
            email: 'dasilvasantosluisfelipe@gmail.com',
            name: 'luis santos'
        }
    ])
}