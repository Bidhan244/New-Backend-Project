const express = require('express');
const { connect } = require('mongoose');
const { connectToDataBase } = require('./controller/db/db');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

connectToDataBase ();

const PORT = process.env.PORT;

app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Bidhan Thapa');
});





