/* eslint func-names: ["error", "never"]*/
/* eslint linebreak-style: ["error", "windows"]*/
exports.up = function (knex) {
  return knex.schema.createTable('test-data', (table) => {
    table.increments();
    table.string('product').notNullable().defaultTo('');
    table.string('region').notNullable().defaultTo('');
    table.string('sector').notNullable().defaultTo('');
    table.string('currency').notNullable().defaultTo('');
    table.string('ticker').notNullable().defaultTo('');
    table.string('price').notNullable().defaultTo('');
    table.string('quantity').notNullable().defaultTo('');
    table.string('cost').notNullable().defaultTo('');
    table.string('nav').notNullable().defaultTo('');
    table.string('pnl').notNullable().defaultTo('');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
