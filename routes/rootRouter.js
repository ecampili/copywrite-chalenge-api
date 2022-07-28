const { Router } = require('express');
const { processText, welcome } = require('../controllers/rootController');

const router = Router();

router.get('/', welcome);
router.get('/iecho', processText);

module.exports = router;
