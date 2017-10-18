$(document).ready(function(){
	console.log("hello world");

	//var containing topics

	var topics = ["cat", "dog"];
	// console.log(topics);

	//create html button for each topic
		//loop to append button for each string in array
	for (var i = 0; i < topics.length; i++) {
		console.log(topics[i])	
		var topicButton = $("<button>");
		
		topicButton.text(topics[i]);
		
		topicButton.attr("type", "button");
		topicButton.addClass("btn btn-primary topicButton");
		topicButton.attr("data-type", topics[i]);
		$(".topic-buttons").append(topicButton);

	}
		
	$(document).on("click", ".topicButton", function() {
		var topicButtonValue = $(this).attr("data-type");
		// console.log(topicButtonValue);

		var queryURL = "http://api.giphy.com/v1/gifs/search?q="+topicButtonValue+ "&api_key=dc6zaTOxFJmzC&limit=10";
		// console.log(queryUrl);

		$.ajax({
		  url: queryURL,
		  method: "GET"
		})
		.done(function(response) {
		  var results = response.data;
		  console.log(results);
		});
		
	});
	//on click button 
		//grab 10 static gifs from gif api
		//place them on page

	//click img to animate
	//click animated img to stop

	//display content

	//input to add new topic to array
	//function call to take topic in array and remake buttons
});