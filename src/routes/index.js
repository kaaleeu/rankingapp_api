const express = require('express');
const ApiController = require('../controllers/ApiController');
const router = express .Router();

router.get('/', (req, res) => {
    res.send('<h1>API Ranking</h1>'
    )
});
router.get('/ping', (req, res) => {
    res.json({pong: true});
});

router.get('/addscore/:nick/:score', ApiController.addScore);
router.get('/ranking', ApiController.ranking);
router.get('/highscore', ApiController.highScore);

module.exports = router;