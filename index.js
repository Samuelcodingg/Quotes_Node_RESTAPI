const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
require('dotenv').config();
const port = process.env.PORT;

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
})
