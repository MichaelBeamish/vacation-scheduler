exports.up = function(knex, Promise) {
  return knex.schema.createTable("claim_events", table => {
    table.increments();
    table
      .integer("claim_id")
      .references("id")
      .inTable("claims")
      .index()
      .onDelete("CASCADE");
    table.string("event_type");
    table.text("description");
    table.date("startDate");
    table.date("endDate");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("claim_events");
};
