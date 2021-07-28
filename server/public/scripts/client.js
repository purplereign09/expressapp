$(document).ready(onReady);

function onReady(){
    console.log('hi there!');

    $('img').hide().fadeIn(5000);

    //On page load, grab quote data from the server
    getQuotes();
}

function getQuotes(){
    //Ajax
    //Making an HTTP request to our server
    //to our GET/Quotes
    $.ajax({
        //Tell AJAX what endpoint to hit
        //endpoint = url + method
        method: 'GET',
        url: '/quotes'
    })
        .then(function(response) {
            console.log('GET /quotes response', response);
            //render quotes w/jquery

            let quoteList = $('#quotes');
            console.log('quotes list element', quoteList);

            for(let quote of response) {
                quoteList.append(`
                    <li>
                        ${quote.text}
                        <em> -- by ${quote.author}</em>
                    </li>
                `);
            }
        });
}