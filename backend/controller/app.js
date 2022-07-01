const express = require('express');
const logTimes = require('../model/log_times.js');
const recipes = require('../model/recipes.js');
const recipeFlows = require('../model/recipe_flows.js');
const processSteps = require('../model/process_steps.js');
const app = express();

const cors = require('cors');
const { type } = require('express/lib/response');
app.options('*', cors());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/log_times", (req, res) => {
    logTimes.getAllLogTimes((error, findAllLogTimes) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).json(findAllLogTimes);
        }
    })
})

app.get("/recipes", (req, res) => {
    recipes.getAllRecipes((error, findAllRecipes) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).json(findAllRecipes);
        }
    })
})

app.get("/recipe_flows", (req, res) => {
    recipeFlows.getAllRecipeFlows((error, findAllRecipeFlows) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).json(findAllRecipeFlows);
        }
    })
})

app.get("/process_steps", (req, res) => {
    processSteps.getAllProcessSteps((error, findAllProcessSteps) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).json(findAllProcessSteps);
        }
    })
})

module.exports = app;