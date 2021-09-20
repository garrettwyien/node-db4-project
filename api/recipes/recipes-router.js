const express = require('express');
const Recipes = require('./recipes-model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Recipes.find()
    .then(recipes=>{
        res.json(recipes)
    })
    .catch(next)
})

router.post('/', (req,res,next) => {
    const newRecipe = req.body
    Recipes.add(newRecipe)
    .then(recipe=>{
        res.status(201).json(recipe)
    })
    .catch(next)
})

module.exports = router