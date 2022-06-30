const db = require('./databaseConfig');

module.exports = {

    getAllLogTimes: (callback) => {
        db.connect((error, client, done) => {
            if (error) {
                callback(error, null);
            } else {
                const getAllLogTimesQuery = `SELECT * FROM log_times`;
                client.query(getAllLogTimesQuery, (error, results) => {
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