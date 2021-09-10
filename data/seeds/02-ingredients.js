const ingredients = [
        {recipe_id:1, ingredient_name: 'tomato', amount: '1' },
        {recipe_id:1, ingredient_name: 'basil', amount: '1 handful'},
        {recipe_id:1, ingredient_name: 'mozerella', amount: '1 ball'},
        {recipe_id:1, ingredient_name: 'salt', amount: 'to taste'},
        {recipe_id:1, ingredient_name: 'pepper', amount: 'to taste'},
        {recipe_id:1, ingredient_name: 'olive oil', amount: 'drizzle'},
        {recipe_id:1, ingredient_name: 'balsamic glaze', amount: 'drizzle'},
        {recipe_id:2, ingredient_name: 'salmon', amount: '8oz'},
        {recipe_id:2, ingredient_name: 'olive oil', amount: 'drizzle'},
        {recipe_id:2, ingredient_name: 'brussel sprouts', amount: '10'},
        {recipe_id:2, ingredient_name: 'salt', amount: 'to taste'},
        {recipe_id:2, ingredient_name: 'pepper', amount: 'to taste'},
        {recipe_id:2, ingredient_name: 'paprika', amount: '3 shakes'},
        {recipe_id:3, ingredient_name: 'porkchop', amount: '8oz' },
        {recipe_id:3, ingredient_name: 'green beans', amount: '15'},
        {recipe_id:3, ingredient_name: 'salt', amount: 'to taste' },
        {recipe_id:3, ingredient_name: 'pepper', amount: 'to taste' },
        {recipe_id:3, ingredient_name: 'butter', amount: '1 tbsp' },
        {recipe_id:3, ingredient_name: 'olive oil', amount: 'drizzle' },
        {recipe_id:3, ingredient_name: 'garlic', amount: '2 cloves' }
]


exports.ingredients = ingredients


exports.seed = function(knex) {
  return knex('ingredients').insert(ingredients)
};
