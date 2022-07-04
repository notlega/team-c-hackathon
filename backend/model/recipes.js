const db = require('./databaseConfig');

module.exports = {

    getAllRecipes: async () => {
        const getAllRecipesQuery = `SELECT * FROM "APTD".recipes;`;
        const results = await db.query(getAllRecipesQuery);
        return results;
    }
}