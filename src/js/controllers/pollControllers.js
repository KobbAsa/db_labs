const Poll = require('../models/pollModel');

const pollController = {
    createPoll: async (req, res) => {
        try {
            console.log("Creating a new poll with data:", req.body);
            const { id, title, description } = req.body;
            const newPoll = await Poll.create({ id, title, description });
            console.log("New poll created:", newPoll);
            res.status(201).json(newPoll);
        } catch (error) {
            console.error("Error creating poll:", error);
            res.status(400).json({ error: error.message });
        }
    },

    getAllPolls: async (req, res) => {
        try {
            console.log("Fetching all polls");
            const polls = await Poll.findAll();
            console.log("Polls fetched:", polls);
            res.status(200).json(polls);
        } catch (error) {
            console.error("Error fetching polls:", error);
            res.status(500).json({ error: error.message });
        }
    },

    getPollById: async (req, res) => {
        try {
            console.log("Fetching poll with ID:", req.params.id);
            const { id } = req.params;
            const poll = await Poll.findByPk(id);
            if (poll) {
                console.log("Poll found:", poll);
                res.status(200).json(poll);
            } else {
                console.log("Poll not found with ID:", id);
                res.status(404).json({ error: 'Poll not found' });
            }
        } catch (error) {
            console.error("Error fetching poll by ID:", error);
            res.status(500).json({ error: error.message });
        }
    },

    updatePoll: async (req, res) => {
        try {
            console.log("Updating poll with ID:", req.params.id, "and data:", req.body);
            const { id } = req.params;
            const { title, description } = req.body;
            const updated = await Poll.update({ title, description }, { where: { id } });
            if (updated) {
                const updatedPoll = await Poll.findByPk(id);
                console.log("Poll updated:", updatedPoll);
                res.status(200).json(updatedPoll);
            } else {
                console.log("Poll not found for update with ID:", id);
                res.status(404).json({ error: 'Poll not found' });
            }
        } catch (error) {
            console.error("Error updating poll:", error);
            res.status(500).json({ error: error.message });
        }
    },

    deletePoll: async (req, res) => {
        try {
            console.log("Deleting poll with ID:", req.params.id);
            const { id } = req.params;
            const deleted = await Poll.destroy({ where: { id } });
            if (deleted) {
                console.log("Poll deleted with ID:", id);
                res.status(200).json({ message: 'Poll deleted' });
            } else {
                console.log("Poll not found for deletion with ID:", id);
                res.status(404).json({ error: 'Poll not found' });
            }
        } catch (error) {
            console.error("Error deleting poll:", error);
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = pollController;
