var apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=newQuote";

$("#new-quote").on("click", function () {
	$.ajax({
		url: apiUrl,
		jsonp: "newQuote",
		dataType: "jsonp",
	});
});


function newQuote (quote) {
	$("#content").text(quote.quoteText);
	$("#author").text(quote.quoteAuthor);
}