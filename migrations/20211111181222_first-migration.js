
exports.up = function(knex) {
  return knex.schema.createTable('hogwarts-staff', tbl => {
      tbl.increments('staff_id');
      tbl.string('name').notNullable().unique();
      tbl.string('role').notNullable();
      tbl.string('subject');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('hogwarts-staff');
};
