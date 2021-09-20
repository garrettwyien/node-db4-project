const db = require('../../data/db-config');

async function find()  {
    const recipes = await db('recipes');
    const ingredients = await db('ingredients')

    const result = [];
    recipes.map(obj=>{

        const item = {
            recipe_id: obj.recipe_id,
            recipe_name: obj.recipe_name,
            ingredients: [],
            steps: []
        }
        result.push(item)
    })
    

    return result;
}

async function add(newRes) {
    const [resource_id] = await db('resources').insert(newRes)
    const result = await db('resources').where('resource_id', resource_id).first()
    return result
}

module.exports = {
    find,
    add
};
// [{
//     "recipe_name": "Spaghetti Bolognese",
//     "ingredients": [
//       {
//          "ingredient_name": "tomato"
//          "amount": 1
//       }
//      ]
//     "steps": [
//       {
//         "step_number": 1,
//         "step_instructions": "Put a large saucepan on a medium heat",
//       },
//       {
//         "step_number": 2,
//         "step_instructions": "Add 1 tbsp olive oil",
//       },
//      ]
//   }]