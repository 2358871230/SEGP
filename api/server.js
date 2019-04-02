const express = require('express'),
path = require('path');
bodyParser = require('body-parser');
cors = require('cors');
mongoose = require('mongoose');

console.log(__dirname)

const loginRoute = require('./routes/login.route');

const app = express();
let port = 18888;

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, accept, origin, content-type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'dist')))
app.use('/login', loginRoute);
const server = app.listen(port, function() {
    console.log('Listening on port ' + port)
});

