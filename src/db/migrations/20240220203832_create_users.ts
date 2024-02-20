import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('email');
    table.string('username');
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTableIfExists('users');
}
