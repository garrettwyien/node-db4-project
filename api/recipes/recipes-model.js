const db = require('../../data/db-config');

async function find()  {
    const recipesList = await db('recipes')
    const result = [];
    for (let i=0; i <= recipesList.length; i++) {
        recipesList.forEach(obj=>{
                const ingredientsList = async () =>{ 
                    await db('ingredients')
                        .select('ingredient_name', 'amount')
                        .where('recipe_id', obj.recipe_id);
                }
                const stepsList = async () => {
                    await db('steps')
                        .select('step_number', 'instructions')
                        .where('recipe_id', obj.recipe_id);
                }
            const item = {
                recipe_name: obj.recipe_name,
                ingredients: ingredientsList(),
                steps: stepsList()    
            }
            result.push(item)
        })
    }

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