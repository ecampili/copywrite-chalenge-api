require('dotenv').config();
const express = require('express');
const cors = require('cors');

const path = require('path');
const rootRouter = require('./routes/rootRouter');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname + '/public')));

app.use(cors());
app.use(express.json());
app.use('/api', rootRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

module.exports = app;
