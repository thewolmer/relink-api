const express = require('express')
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const notesRouter = require('./routes/notes');







app.use(cors());
app.use('/notes', notesRouter);

// app.use(mainRouter);

app.listen(PORT, () => console.log(`Listening to port http://localhost:${PORT}`));