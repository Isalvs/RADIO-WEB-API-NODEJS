import Knex from 'knex';
export async function up(knex: Knex) {
    return knex.schema.createTable('songs', table => {
        table.increments('id').primary().unique();
        table.integer('userID',11).unsigned().references('id').inTable('users');
        table.string('dedicated', 255);
        table.string('course', 255).notNullable();
        table.string('music', 255).notNullable();
        table.string('name', 255).notNullable();
        table.boolean('reproduced').notNullable();
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('songs');
}