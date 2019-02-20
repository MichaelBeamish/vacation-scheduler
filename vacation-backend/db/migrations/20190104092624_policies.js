exports.up = function(knex, Promise) {
  return knex.schema.createTable("trips", table => {
    table.increments();
    table.string("name");
    table.string("country");
    table.date("date");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .index()
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("trips");
};
