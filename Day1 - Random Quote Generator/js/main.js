$(document).ready(function(){
    var quotes = ["Don't be afraid to give up the good to go for the great.","Nobody minds having what is too good for them."
    ,"The only thing to do with good advice is to pass it on. It is never of any use to oneself."];
    var authors = ["John D. Rockefeller","Jane Austen","Oscar Wilde"];

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