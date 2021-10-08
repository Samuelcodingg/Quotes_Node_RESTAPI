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