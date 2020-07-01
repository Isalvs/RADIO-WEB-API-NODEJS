import Knex from 'knex';
export async function up(knex: Knex) {
    return knex.schema.createTable('songs', table => {
        table.increments('id').primary().unique();
        table.integer('userID').references('users.id').notNullable().onDelete('CASCADE');
        table.text('dedicated');
        table.text('course').notNullable();
        table.text('music').notNullable();
        table.text('name').notNullable();
        table.boolean('reproduced').notNullable();
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('songs');
}