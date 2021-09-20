const steps = [
  {recipe_id: 1, step_number: 1, instructions:'slice tomato and mozerella into medallions'},
  {recipe_id: 1, step_number: 2, instructions:'plate by placing tomato at the base, mozerella on top of the tomato, and basil on top of the mozerella'},
  {recipe_id: 1, step_number: 3, instructions:'drizzle olive oil and balsamic glaze, season with salt and pepper'},
  {recipe_id: 2, step_number: 1, instructions:'preheat oven to 450 degrees'},
  {recipe_id: 2, step_number: 2, instructions:'halve brussel sprouts and toss in a mixing bowl with salt, pepper, paprika, and olive oil'},
  {recipe_id: 2, step_number: 3, instructions:'spread brussel sprouts on a baking sheet leaving enough room for the salmon. place sheet in oven and set timer for 5 minutes'},
  {recipe_id: 2, step_number: 4, instructions:'wash and dry salmon and season with salt and pepper and olive oil'},
  {recipe_id: 2, step_number: 5, instructions:'when your five minute timer goes off, put the salmon in the oven and set another timer for 13 minutes'},
  {recipe_id: 2, step_number: 6, instructions:'remove from oven and let cool for a minute'},
  {recipe_id: 3, step_number: 1, instructions:'preheat your oven to 400 degrees'},
  {recipe_id: 3, step_number: 2, instructions:'wash your porkchop drying thoroughly after and rinse and trim your green beans and mince your garlic'},
  {recipe_id: 3, step_number: 3, instructions:'season your porkchop with salt and pepper and a little oil'},
  {recipe_id: 3, step_number: 4, instructions:'set porkchop on a baking sheet and place in oven. set timer for 20 minutes'},
  {recipe_id: 3, step_number: 5, instructions:'in a pan on medium-high heat, toss in butter, garlic until light brown but not burnt.'},
  {recipe_id: 3, step_number: 6, instructions:'toss in green beans and salt and stirfry them for about 5 minutes or cooked to your liking'},
  {recipe_id: 3, step_number: 7, instructions:'remove porkchop from the oven and let rest for a few minutes'},
]

exports.steps=steps


exports.seed = function(knex) {
  return knex('steps').insert(steps);
};
