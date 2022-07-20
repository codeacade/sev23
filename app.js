const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req,res) => res.sendFile(__dirname + '/index.html'));
app.listen(process.env.PORt || 3000);