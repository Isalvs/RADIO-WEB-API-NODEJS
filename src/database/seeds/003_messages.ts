import Knex from 'knex';

exports.seed = function (knex: Knex) {
    return knex('roomchat').insert([
        {
            userID: 1,
            text: "Olá pessoal, tudo bem com vocês?",
            name: 'Luis Santos'
        }
    ])
}