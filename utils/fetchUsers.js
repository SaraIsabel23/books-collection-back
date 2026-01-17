const axios    = require('axios');
const urlUsers = `https://api-books-ac3j.onrender.com/users`;


async function fetchUsers() {
    const users = await axios.get(urlUsers)
    console.log(users.data)
    return users.data
};

module.exports = fetchUsers