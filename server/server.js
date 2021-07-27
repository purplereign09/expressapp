console.log(`hi patty!`);

const express = require('express');

const app = express();

//Tell express where to find all
//of our 'public' files
//aka 'client-side files
//aka "static assets"
app.use(express.static('./server/public'));

//listen for requests
const port = 5000;
app.listen(5000, function(){
    //kind of like our 'onReady' function
    console.log('app is up and running');
});