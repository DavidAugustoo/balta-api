const express = require('express');
const { route } = require('express/lib/application');

const app = express();

const router = router.get('/', (req, res) => {
    res.status(200).send({
        "title": "node"
    });
});

app.use('/', route);

module.exports = app;