const db = require('./databaseConfig');

module.exports = {

    getAllProcessSteps: async () => {
        const getAllProcessStepsQuery = `SELECT * FROM "APTD".process_steps;`;
        const results = db.query(getAllProcessStepsQuery);
        return results;
    }
}