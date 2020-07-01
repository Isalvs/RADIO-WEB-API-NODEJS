import Knex from 'knex';
export async function up(knex: Knex) {
    return knex.schema.createTable('roomchat', table => {
        table.increments('id').primary().unique();
        table.integer('userID').references('users.id').notNullable().onDelete('CASCADE');
        table.text('text').notNullable();
        table.text('name').notNullable();
        table.text('data').notNullable();
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('roomchat');
}