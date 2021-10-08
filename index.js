const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
require('dotenv').config();
const port = process.env.PORT;

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//database setup
mongoose.connect(process.env.DATABASE).then(() => { console.log('DB connection succesfull') } );

//routes setup
app.use('/api/quotes', require('./routes/quotes'));

//listening app
app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
})
