exports.up = function(knex, Promise) {
  return knex.schema.createTable("claims", table => {
    table.increments();
    table
      .integer("policy_id")
      .references("id")
      .inTable("policies")
      .index()
      .onDelete("CASCADE");
    table.string("claim_number");
    table.string("cause_of_loss");
    table.date("date_of_loss");
    table.date("date_filed");
    table.date("date_closed");
    table.integer("payment");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("claims");
};
