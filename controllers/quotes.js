const quote = require('../models/quotes');

exports.create = async (req, res) => {
    const newQuote = new quote(req.body);
    await newQuote.save((err, data) => {
        if(err) {
            return res.status(400).json({
                error: 'The server could not understand your request, check your data and try again.'
            })
        }
        res.json({data});
    })
}

exports.list = async (req, res) => {
    await quote.find().exec((err, data) => {
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

exports.findQuote = async (req, res) => {
    try{
        const quoteFounded = await quote.findById(req.params.id);
        res.send({data: quoteFounded});
    }
    catch {
        return res.status(404).json({
            error: 'There is not a quote with that ID'
        })
    }
}

exports.updateQuote = async (req, res) => {
    try{
        const quoteFounded = await quote.findById(req.params.id);
        Object.assign(quoteFounded, req.body);
        quoteFounded.save();
        res.send({data: quoteFounded});
    }
    catch {
        return res.status(404).json({
            error: 'There is not a quote with that ID'
        })
    }
}

exports.deleteQuote = async (req, res) => {
    try {
        const quoteFounded = await quote.findById(req.params.id);
        quoteFounded.remove();
        res.send({data: quoteFounded});
    }
    catch {
        return res.status(404).json({
            error: 'There is not a quote with that ID'
        })
    }
}