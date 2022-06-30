const db = require('./databaseConfig');

module.exports = {

    getAllProcessSteps: (callback) => {
        db.connect((error, client, done) => {
            if (error) {
                callback(error, null);
            } else {
                const getAllProcessStepsQuery = `SELECT * FROM "APTD".process_steps;`;
                client.query(getAllProcessStepsQuery, (error, results) => {
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