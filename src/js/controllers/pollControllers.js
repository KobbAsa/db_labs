const Poll = require('../models/pollModel');

const pollController = {
    createPoll: async (req, res) => {
        try {
            const { id, title, description } = req.body;
            const newPoll = await Poll.create({ id, title, description });
            res.status(201).json(newPoll);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getAllPolls: async (req, res) => {
        try {
            const polls = await Poll.findAll();
            res.status(200).json(polls);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getPollById: async (req, res) => {
        try {
            const { id } = req.params;
            const poll = await Poll.findByPk(id);
            if (poll) {
                res.status(200).json(poll);
            } else {
                res.status(404).json({ error: 'Poll not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updatePoll: async (req, res) => {
        try {
            const { id } = req.params;
            const { title, description } = req.body;
            const updated = await Poll.update({ title, description }, { where: { id } });
            if (updated) {
                const updatedPoll = await Poll.findByPk(id);
                res.status(200).json(updatedPoll);
            } else {
                res.status(404).json({ error: 'Poll not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deletePoll: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Poll.destroy({ where: { id } });
            if (deleted) {
                res.status(200).json({ message: 'Poll deleted' });
            } else {
                res.status(404).json({ error: 'Poll not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = pollController;
