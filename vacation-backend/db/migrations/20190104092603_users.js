exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table.string("email");
    table.text("password");
    table.string("first_name");
    table.string("last_name");
    table.string("alias");
    table.string("roll");
    table.string("phone");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
