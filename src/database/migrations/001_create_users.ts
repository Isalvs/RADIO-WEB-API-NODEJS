import Knex from 'knex';
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary().unique();
        table.string('course', 255).notNullable();
        table.string('email', 255).notNullable();
        table.string('name', 255).notNullable();
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}