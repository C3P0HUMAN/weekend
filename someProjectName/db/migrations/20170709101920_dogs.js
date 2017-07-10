exports.up = function(knex, Promise) {
  return knex.schema.createTable('dogs_table', function(table) {
    table.increments();
    table.string('dog_breed').notNullable();
    table.string('dog_name').notNullable();
    table.integer('dog_weight').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
knex.schema.dropTable('dogs_table');
};
