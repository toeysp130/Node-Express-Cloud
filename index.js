require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/',(req,res) => {
    res.send('hello Node.js world!');

})

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`);
});