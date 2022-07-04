const db = require('./databaseConfig');

module.exports = {

    getAllRecipeFlows: async () => {
        const getAllRecipeFlowsQuery = `SELECT * FROM "APTD".recipe_flows;`;
        const results = await db.query(getAllRecipeFlowsQuery);
        return results;
    }
}