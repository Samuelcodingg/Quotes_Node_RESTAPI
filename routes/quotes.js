const express = require('express');
const router = express.Router();

const { create } = require('../controllers/quotes');

router.post('/create', create);

module.exports = router;