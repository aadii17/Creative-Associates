const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const GPD = require('./getPortofolioData');

const port = process.env.PORT || 3001;
const indexPath = path.join(__dirname, '..', 'build', 'index.html');

app.use(cors());

app.use('/', express.static(path.join(__dirname, '../build')));

app.get(['/', '/portofolio', '/portofolio/*'], (req, res) => {
    res.sendFile(indexPath, (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.get("/api", (req, res) => {
    res.json(GPD.GPD());
});

app.get("/api/carousel", (req, res) => {
    res.json(GPD.getCarousel());
});

app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
