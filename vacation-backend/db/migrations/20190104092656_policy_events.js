exports.up = function(knex, Promise) {
  return knex.schema.createTable("policy_events", table => {
    table.increments();
    table
      .integer("policy_id")
      .references("id")
      .inTable("policies")
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
  return knex.schema.dropTable("policy_events");
};
