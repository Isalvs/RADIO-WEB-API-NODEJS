import Knex from 'knex';
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary().unique();
        table.text('course').notNullable();
        table.text('email').notNullable().unique();
        table.text('name').notNullable();
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}