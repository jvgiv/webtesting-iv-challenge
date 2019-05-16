
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable();

        tbl.string('info', 255).notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
};
