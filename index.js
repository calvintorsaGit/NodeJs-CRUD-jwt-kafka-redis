const express = require('express');

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
})

