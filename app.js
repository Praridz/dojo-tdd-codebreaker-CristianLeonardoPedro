const express = require('express');
const app = express();
const codebreaker = require('./codebreaker');

app.get('/codebreaker' , (req,res) => {
res.json({
    result: codebreaker.codebreaker(req.query.value)
});

});

module.exports = app;