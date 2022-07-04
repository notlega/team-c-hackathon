const db = require('./databaseConfig');

module.exports = {

    getAllLogTimes: async () => {
        const getAllLogtimesQuery = `SELECT * FROM "APTD".log_times;`;
        const result = await db.query(getAllLogtimesQuery);
        return result;
    }
}