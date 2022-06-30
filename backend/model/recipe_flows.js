const db = require('./databaseConfig');

module.exports = {

    getAllRecipeFlows: (callback) => {
        db.connect((error, client, done) => {
            if (error) {
                callback(error, null);
            } else {
                const getAllRecipeFlowsQuery = `SELECT * FROM "APTD".recipe_flows;`;
                client.query(getAllRecipeFlowsQuery, (error, results) => {
                    done();
                    if (error) {
                        callback(error, null);
                    } else {
                        callback(null, results);
                    }
                });
            }
        })
    }
}