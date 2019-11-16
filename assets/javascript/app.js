var topics = ['apples','piers','oranges','world cup'];


for(i=0;i < topics.length;i++){

 var topicBtn = "<button>" + topics[i] + "</button>"


    // i will add a class to this button to make it style 

    //topicBtn.addClass("btn btn-primary");

    //i can also add an attribute 
        //topicBtn.attr("button",topics[i])

    //finally add to the html page by appending to a div 
   $("#main-section").append(topicBtn)

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
        console.log('testing my api call ' + queryURL);

        //note to self remember to add ---   &api_key=


        // NEXT STEPS 
            /*
                1. add 10 images for each topic
                2. add rating under each image
                3. if clicked the image should animate 


    })

})




//create an arrary named topics 
//loop through arrary and create a button for each topic 
//create an account to get an api key
//import my api key - 2M3P6h2192Qg2v002nmFmDC48LvprBab 
// on a click we want to trigger the api
//create a variable within the click to capture the button value you want to access
