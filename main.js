const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const router = require('./routes/index.routes')

const app = express();
const port = config.get('port') || 2000;

app.use(express.json());
app.use(`/api`,router);


async function startApp() {
    try {
        mongoose.connect(config.get('dbUri'));
        app.listen(port, () => console.log("Server listening on port 2000"));
    } catch (error) {
        console.log('Error on server: ', error);
    }
}
startApp();