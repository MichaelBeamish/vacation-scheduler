exports.up = function(knex, Promise) {
  return knex.schema.createTable("policies", table => {
    table.increments();
    table.string("policy_number");
    table.string("policy_type");
    table.string("insured_location");
    table.string("named_insured");
    table.string("mailing_address");
    table.string("phone_number");
    table.integer("deductible");
    table.integer("policy_limit");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("policies");
};
