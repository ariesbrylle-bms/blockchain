const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());

var dogs = []

app.get('/', (req, res) =>
    res.status(200).json({
        greeting: 'Hello World!'
    }));
app.post('/', (req, res) =>
    res.status(200).json({
        greeting: `Hello ${req.body.username}!`
    }));

app.post('/dog', (req, res) => {
    dogs.push(req.body.dogname);
    return res.status(200).json({ greeting: `Hello ${req.body.dogname}!` });
})

app.get('/dog', (req, res) =>
    res.status(200).json({
        dogs: `${dogs}`
    }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));