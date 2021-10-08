const express = require('express');

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
})
