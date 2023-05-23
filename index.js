const express = require('express')
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const mainRouter = require('./routes/main');
const notesRouter = require('./routes/notes');
const contentRouter = require('./routes/content');







app.use(cors());
app.use('/notes', notesRouter);
app.use('/content', contentRouter);
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(mainRouter);

app.listen(PORT, () => console.log(`Listening to port http://localhost:${PORT}`));