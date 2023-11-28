const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollControllers');

router.get('/', pollController.getAllPolls);

router.get('/:id', pollController.getPollById);

router.post('/', pollController.createPoll);

router.put('/:id', pollController.updatePoll);

router.delete('/:id', pollController.deletePoll);

module.exports = router;
