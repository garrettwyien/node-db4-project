
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl =>{
    tbl.increments('recipe_id');
    tbl.text('recipe_name', 128)
    .unique()
    .notNullable();
  })
  .createTable('ingredients', tbl=>{
    tbl.increments('ingredient_id');
    tbl.text('ingredient_name', 128)
    .notNullable();
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    tbl.text('amount', 128)
        .notNullable();
  })
  .createTable('steps', tbl=>{
    tbl.increments('step_id');
    tbl.integer('step_number')
        .unsigned()
        .notNullable();
    tbl.text('instructions')
        .notNullable();
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
};
