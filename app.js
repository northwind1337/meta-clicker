const express = require('express');
const app = express();
const serverPort = 9000;

app.use('/clicker', express.static('web-app'));

app.listen(serverPort, ()=>{
    console.log(`Meta Clicker is listening to http://localhost:${serverPort}/clicker`);
})

