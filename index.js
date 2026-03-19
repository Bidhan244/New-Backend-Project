const express = require('express');

const dotenv = require('dotenv');
const { connectToDataBase } = require('./db/db');
dotenv.config();

const app = express();
app.use(express.json());

connectToDataBase();

app.use("/api/auth", require("./routes/userRoute"));

const PORT = process.env.PORT;


app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

app.get('/', (req, res) => {
    res.send('Bidhan Thapa');
});





