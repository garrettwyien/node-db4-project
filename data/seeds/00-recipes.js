const recipes = [
  {recipe_name: 'caprese salad'},
  {recipe_name: 'baked salmon and brussel sprouts'},
  {recipe_name: 'porkchops and green beans'}
]

exports.recipes = recipes

exports.seed = function(knex) {
  return knex('recipes').insert(recipes);
};
