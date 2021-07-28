console.log(`hi patty!`);



const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


const quotes = [
    {
        text: 'Debuggin is like being the detective in a crime movie where you are also the murderer',
        author: 'Felipe Fortes',
    },
    {
        text: 'If you want to increase your success rate, double your failure rate',
        author: 'Thomas Watson Jr.'
    },
    {
        text: 'Code is there to explain the comments to the computer',
        author: 'Andy Harris'
    }
];

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

app.use(express.static('./server/server.js'));


//a specific URL: http://localhost:5000/trains
app.get('/quotes', function(req, res){
    console.log('Ready to send back some quotes');
    console.log('request.route.path', req.route.path);

    //send back data to client
    res.send(quotes);
});

//POST /quotes
app.post('/quotes', function(req, res){
    

    //body parser
    //this is an OBJECT
    console.log('req.body', req.body);
    let newQuote = req.body;
    quotes.push(newQuote);
    
    //Validate code
    if(!newQuote.author || !newQuote.text){

    }
    res.sendStatus(400).send({
       
    });//created
     return;
});

