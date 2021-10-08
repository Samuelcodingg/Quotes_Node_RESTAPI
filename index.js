const express = require('express');

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log('Hello world! this will be an amazing REST API ;)');
})
