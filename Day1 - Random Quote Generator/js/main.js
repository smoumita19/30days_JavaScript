$(document).ready(function(){
    var quotes = ["Life is hell","Fuck the shit","Dont know"];
    var authors = ["ABC","DEF","ERF"];

    genarateNextQuote(quotes,authors);

    $(".genarateNextQuote").click(function(){
        genarateNextQuote(quotes,authors);
        
    });

    function genarateNextQuote(q,a) {
        quoteNo = Math.floor(Math.random() * 3);

        $(".showQuote").text('" ' + q[quoteNo] + ' "');
        $(".showAuthor").text('- " ' + a[quoteNo] + ' "');
    }
})