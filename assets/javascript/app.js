var topics = ['soccer','football','basketball','tennis'];


for(i=0;i < topics.length;i++){

     var topicBtn = $("<button>");


    // i will add a class to this button to make it style 
    topicBtn.addClass("btn btn-info");

    //i can also add an attribute 
    topicBtn.attr("image-data", topicBtn[i]);

    //add text to button
    topicBtn.text(topics[i].toUpperCase());
   
    //finally add to the html page by appending to a div 
   $("#nav-item").append(topicBtn)

}


$("button").on("click", function(){

    //capture value of my selected button
    var topicCat = $(this).text().trim();

    //construct a queryURL 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topicCat + "&api_key=2M3P6h2192Qg2v002nmFmDC48LvprBab&limit=10";

    //create ajax call
    $.ajax({
        url: queryURL,
        method: "GET"

    })

    //Get response --- then is a promise that is used to set data once its completed 
    .then(function(response){
        console.log('my query url ' + queryURL);

        console.log('testing my api call ' , response);

        //need to define the results
        var results = response.data;

        console.log('get results  ' , results)
        console.log('get first rating ' , results[0].rating)
        //note to self remember to add ---   &api_key=



        for(i=0; i < results.length; i++){

            var divHolder = $('<div>');


            //create img holder for each gif
            var gifyImgHolder = $('<img>');
            gifyImgHolder.attr("src", results[i].images.fixed_height.url);

            var gifyRating = $('<p>').text('Rating: ' + results[i].rating.toUpperCase())

            //attach both image and rating to my new div 
            divHolder.append(gifyImgHolder);
            divHolder.append(gifyRating)

            //prepend/display my new div to an already existing html div 
            $("#main-section").append(divHolder);
        }
        // NEXT STEPS 
            /*
                1. add 10 images for each topic
                2. add rating under each image
                3. if clicked the image should animate 
             */

    })

})




//create an arrary named topics 
//loop through arrary and create a button for each topic 
//create an account to get an api key
//import my api key - 2M3P6h2192Qg2v002nmFmDC48LvprBab 
// on a click we want to trigger the api
//create a variable within the click to capture the button value you want to access
