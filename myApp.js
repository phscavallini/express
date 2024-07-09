let express = require('express');
let app = express();

absolutePath = __dirname + '/views/index.html';

console.log("Hello World");

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));






























 module.exports = app;
