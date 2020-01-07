var movieResultEl = $("#movie-result");
var movieSearch = $("#movie-search");
function renderMovie(movie){
    movieResultEl.empty();
    movieResultEl
        .append("<h1>" + movie.Title + "</h1>")
        .append("<h2>" + movie.Year + " " + movie.Runtime +  "</h2>");
}

$("#search-button").on("click", function(event){
    event.preventDefault();
    var title = movieSearch.val();
    console.log("Test");
    $.get("https://omdbapi.com/?t=" + title + "&apikey=trilogy").then(function(result){
        console.log(result);
        renderMovie(result);
    });
});