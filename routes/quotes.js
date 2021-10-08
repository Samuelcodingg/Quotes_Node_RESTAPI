const express = require('express');
const router = express.Router();

const { create, list, findQuote, updateQuote, deleteQuote } = require('../controllers/quotes');

router.post('/create', create);
router.get('/list', list);
router.get('/:id', findQuote);
router.patch('/:id', updateQuote);
router.delete('/:id', deleteQuote);

module.exports = router;