const db = require('./databaseConfig');

module.exports = {

    getAllLogTimes: (callback) => {
        db.connect((error, client, done) => {
            if (error) {
                return callback(error, null);
            } else {
                const getAllLogTimesQuery = `SELECT * FROM "APTD".log_times;`;
                client.query(getAllLogTimesQuery, (error, results) => {
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