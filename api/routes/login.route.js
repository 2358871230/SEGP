const express = require('express');
const app = express();
const loginRoutes = express.Router();

let Login = require('../models/LoginModule')

loginRoutes.route('/').post(function (req, res) {
    res.status(200).send("login success")
})

module.exports = loginRoutes