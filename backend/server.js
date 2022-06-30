const req = require('express/lib/request');
const app = require('./controller/app');
const port = 8081;

app.listen(port, function () {
    console.log("Server started at http://localhost:%s", port);
})