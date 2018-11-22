const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

let players = {};
let games = [];

app.get('/api/players', (req, res) => {
    res.send(players);
});

app.get('/api/players/:player_id', (req, res) => {
    res.send(players[req.params.player_id]);
    console.log(player_id);
});

app.post('/api/players', (req,res) => {
    players[req.body.Name] = req.body;
    res.sendStatus(200);
})

app.get('/api/games', (req, res) => {
    res.send(games);
});

app.post('/api/games', (req,res) => {
    games.push(req.body);
    res.sendStatus(200);
})

server.listen(PORT, () => {
    console.log('Listening on ' + server)
});