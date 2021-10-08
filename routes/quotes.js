const express = require('express');
const router = express.Router();

const { create, list, findQuote } = require('../controllers/quotes');

router.post('/create', create);
router.get('/list', list);
router.get('/:id', findQuote);

module.exports = router;