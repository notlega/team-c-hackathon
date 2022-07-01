const db = require('./databaseConfig');

module.exports = {

    getAllProcessSteps: (callback) => {
        db.connect((error, client, release) => {
            if (error) {
                return callback(error, null);
            } else {
                const getAllProcessStepsQuery = `SELECT * FROM "APTD".process_steps;`;
                client.query(getAllProcessStepsQuery, (error, results) => {
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