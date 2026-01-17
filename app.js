const express = require('express');
const booksRoute  = require('./routes/booksRoutes')
const usersRoute  = require('./routes/usersRoute')
const app     = express();
const PORT    = 3000;


app.use("/books", booksRoute);
app.use("/users", usersRoute);

app.listen(PORT, () => console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`));

