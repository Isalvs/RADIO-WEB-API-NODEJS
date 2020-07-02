import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('messages', table => {
        table.increments('id').primary();
        table.integer('userID',11).unsigned().references('id').inTable('users');
        table.string('name').notNullable();
        table.string('msm').notNullable();
        table.string('course').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('messages');
}
