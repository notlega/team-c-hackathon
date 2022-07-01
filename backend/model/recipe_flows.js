const db = require('./databaseConfig');

module.exports = {

    getAllRecipeFlows: (callback) => {
        db.connect((error, client, done) => {
            if (error) {
                return callback(error, null);
            } else {
                const getAllRecipeFlowsQuery = `SELECT * FROM "APTD".recipe_flows;`;
                client.query(getAllRecipeFlowsQuery, (error, results) => {
                    done();
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