const express    = require('express');
const fetchUsers = require("../utils/fetchUsers")
const route      = express.Router();

route.get("/", async (req, res) => {
    const users = await fetchUsers()
    res.json(users)
});

module.exports = route