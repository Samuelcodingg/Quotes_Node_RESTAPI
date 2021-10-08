const quote = require('../models/quotes');

exports.create = (req, res) => {
    const newQuote = new quote(req.body);
    newQuote.save((err, data) => {
        if(err) {
            return res.status(400).json({
                error: 'The server could not understand your request, check your data and try again.'
            })
        }
        res.json({data});
    })
}

exports.list = (req, res) => {
    quote.find().exec((err, data) => {
        if(err) {
            return res.status(400).json({
                error: 'Something went wrong.'
            })
        }
        else {
            res.json(data);
        }
    })
}