const express = require('express'),
path = require('path')
bodyParser = require('body-parser')
cors = require('cors')
mongoose = require('mongoose')

const loginRoute = require('./routes/login.route');

const app = express()
let port = 18888

app.use(bodyParser.json())
app.use('/login', loginRoute)
const server = app.listen(port, function() {
    console.log('Listening on port ' + port)
});

