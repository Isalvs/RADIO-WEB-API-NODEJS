import Knex from 'knex';
export async function up(knex: Knex) {
    return knex.schema.createTable('roomchat', table => {
        table.increments('id').primary().unique();
        table.integer('userID',11).unsigned().references('id').inTable('users');
        table.string('text', 255).notNullable();
        table.string('name', 255).notNullable();
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('roomchat');
}