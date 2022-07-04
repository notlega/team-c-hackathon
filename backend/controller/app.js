const express = require('express');
const logTimes = require('../model/LogTimes.js');
const recipes = require('../model/Recipes.js');
const recipeFlows = require('../model/RecipeFlows.js');
const processSteps = require('../model/ProcessSteps.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/log_times/", async (req, res) => {
    try {
        const data = await logTimes.getAllLogTimes();
        res.json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.get("/recipes/", async (req, res) => {
    try {
        const data = await logTimes.getAllLogTimes();
        res.json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.get("/recipe_flows/", async (req, res) => {
    try {
        const data = await recipeFlows.getAllRecipeFlows();
        res.json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.get("/process_steps/", async (req, res) => {
    try {
        const data = await processSteps.getAllProcessSteps();
        res.json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = app;