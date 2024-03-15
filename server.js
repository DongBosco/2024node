const express = require('express');
const app = express();

app.get('/', function (req, res) {
    return res.send('helloWorld!');
});

app.listen(3000, function () {
    console.log('server Listening On Port 3000');
});
