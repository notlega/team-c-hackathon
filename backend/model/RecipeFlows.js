const db = require('./databaseConfig');

module.exports = {

    getAllRecipeFlows: (callback) => {
        db.connect((error, client, release) => {
            if (error) {
                return callback(error, null);
            } else {
                const getAllRecipeFlowsQuery = `SELECT * FROM "APTD".recipe_flows;`;
                client.query(getAllRecipeFlowsQuery, (error, results) => {
                    release();
                    if (error) {
                        return callback(error, null);
                    } else {
                        return callback(null, results);
                    }
                });
            }
        })
    }
}