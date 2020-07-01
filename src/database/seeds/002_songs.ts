import Knex from 'knex';

exports.seed = function (knex: Knex) {
    return knex('songs').insert([
        {  
            userID: 1,
            dedicated: '',
            course: 'REDES DE COMPUTADORES',
            music: 'TIM MAIA - GOSTAVA TANTO DE VOCÊ',
            name: 'Luis Santos'
        }
    ])
}