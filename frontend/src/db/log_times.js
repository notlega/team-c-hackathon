import axios from 'axios';

module.exports = {

    logTimesRows: (callback) => {
        axios.get(`${window.location.href.slice(0, -5)}`)
            .then(response => {
                callback(null, response.data.rows);
            })
            .catch(error => {
                callback(error, null);
            })
    }
}
