//intial arrary of topics

var topics = ["soccer", "football", "basketball", "tennis"];

createNav();




function createNav() {
  $("#nav-item").empty();

  for (i = 0; i < topics.length; i++) {
    var topicBtn = $("<button>");

    // adding two classes to my buttons
    topicBtn.addClass("btn btn-info");

   

    //add text to button
    topicBtn.text(topics[i].toUpperCase());

    //finally add to the html page by appending to an id
    $("#nav-item").append(topicBtn);
  }
  populateTopics()
}

$("#add-topic").on("click", function(event) {
  event.preventDefault();

  var newTopic = $("#topic-input")
    .val()
    .trim()
    .toLowerCase();

  topics.push(newTopic);
  createNav();
  console.log("new arrary " + topics);
  createNav();
});


function populateTopics(){

$("button").on("click", function() {

//if i wanted to over write the previous 10 gifs 
  // $("#main-section").empty();



  //capture value of my selected button
  var topicCat = $(this)
    .text()
    .trim();

  //construct a queryURL
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    topicCat +
    "&api_key=2M3P6h2192Qg2v002nmFmDC48LvprBab&limit=10";

  //create ajax call
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    //Get response --- then is a promise that is used to set data once its completed
    .then(function(response) {
      console.log("my query url " + queryURL);

      console.log("testing my api call ", response);

      //need to define the results
      var results = response.data;

      

      console.log("get results  ", results);
      console.log("get first rating ", results[0].rating);
      //note to self remember to add ---   &api_key=

      for (i = 0; i < results.length; i++) {
        var divHolder = $("<div>");

        divHolder.addClass("inline");

        //create img holder for each gif
        var gifyImgHolder = $("<img>");
        gifyImgHolder.attr("src", results[i].images.fixed_height_still.url);
         // adding an attribute to the button
        gifyImgHolder.attr("class", "gif");
        gifyImgHolder.attr("data-state", "still");
       

        var gifyRating = $("<p>").text(
          "Rating: " + results[i].rating.toUpperCase()
        );

        //attach both image and rating to my new div
        divHolder.append(gifyImgHolder);
        divHolder.prepend(gifyRating);

        //prepend/display my new div to an already existing html div
        $("#main-section").append(divHolder);
      }
    });
});
}

/*
$("img.gif").on("click", function() {

  var state = $(this).attr("data-state");
  console.log('stage ' + state)
});

*/