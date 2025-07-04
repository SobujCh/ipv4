const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // or '*' for all origins
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
    const clientIp = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.type('text/plain');
    res.send(clientIp);
});

const port = process.env.PORT || 3021;
app.listen(port, () => {console.log(`Server is listening on port ${port}`);});