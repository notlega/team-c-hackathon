const db = require('./databaseConfig');

module.exports = {

    getAllRecipes: (callback) => {
        db.connect((error, client, done) => {
            if (error) {
                return callback(error, null);
            } else {
                const getAllRecipesQuery = `SELECT * FROM "APTD".recipes;`;
                client.query(getAllRecipesQuery, (error, results) => {
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