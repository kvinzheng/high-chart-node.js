/* eslint func-names: ["error", "never"]*/
/* eslint linebreak-style: ["error", "windows"]*/
exports.up = function (knex) {
  return knex.schema.createTable('datas', (table) => {
    table.increments();
    table.string('bond').notNullable().defaultTo('');
    table.string('equities').notNullable().defaultTo('');
    table.string('fx').notNullable().defaultTo('');
    table.string('fxoptions').notNullable().defaultTo('');
    table.string('swaps').notNullable().defaultTo('');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('datas');
};
