const express = require('express');
const app = express();
const loginRoutes = express.Router();

let Login = require('../models/LoginModule')

loginRoutes.post('/', function (req, res) {
    const username = req.body.username
    const password = req.body.password
    console.log("into login")
    res.status(200).send("login success")
})

loginRoutes.delete('/', function (req, res) {
    res.status(204).send("delete success")
})

module.exports = loginRoutes