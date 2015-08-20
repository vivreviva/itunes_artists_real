// DONE	// Step 1)
		// Take your previous lab solution and copy and paste it here (the Javascript only)
		// Get that working. I've removed the example song so make sure your code hasn't broken because of it.
		// If you didn't finish the lab, finish it up for Step 1


		// use this JSON to fill in the HTML fields!
		// use the example to see what it's supposed to look like


// DONE	// Step 2)
		// Delete the variable musicPlaylist
		// now instead make an AJAX request to this url: "https://itunes.apple.com/search?term=abba"
		// use the response JSON from that request to populate the page.

// DONE // Step 3)
		// Now the hard part. Instead of doing a request to https://itunes.apple.com/search?term=abba
		// I want you to generate the URL for the AJAX request based on the text
		// inside the input element on the page.
		// So if I type Journey into that input and hit submit.
		// it should create the url
		// https://itunes.apple.com/search?term=journey
		// and do an AJAX request to that URL

// Step 4)
// We get back more songs from the API than we have!
// Use our knowledge of creating HTML in Javascript to
// show all the songs properly. The first 3 songs you can skip
// so start your loop at index = 2 instead of 0.


// below var musicPlaylist is the original beginning to the var musicPlaylist. I've set it here as the default so that it populates
// the page when loaded for the first time. This can now be ignored. 
var musicPlaylist = $.getJSON("https://itunes.apple.com/search?term=abba", function(searchResults) {
	for(var index=0; index < searchResults['resultCount'];index++){
		    
				var targetResult = searchResults['results'][index];

				var artist_name = targetResult['artistName'];
				  // console.log(artist_name);

				var title = targetResult['trackName'];
				  // console.log(title);

				var artworkURL = targetResult['artworkUrl100'];
				 // console.log(artworkURL);

				var previewURL = targetResult['previewUrl'];
				 // console.log(previewURL);

				var track_price = targetResult['trackPrice'];
				 // console.log(track_price);

				$(".song img").eq(index).attr("src", artworkURL);
				$(".song .title").eq(index).text(title);
				$(".song .artist_name").eq(index).text(artist_name);
				$(".song .track_price").eq(index).text(track_price);
			}
		});

function submit(event) {
	console.log("I've been clicked!");
	// when user clicks submit then update var musicPlaylist to = $.getJSON("https://itunes.apple.com/search?term=SUBMITTED-TERM"). 
	// this means that your var musicPlayList must be inside the function submit event.

		var inputArtist = $("#artist-search").attr("searchArtist");
		var inputArtist = $("#artist-search").val();
		var musicPlaylist = $.getJSON("https://itunes.apple.com/search?term=" + inputArtist, function(searchResults) {

		// below line is the original beginning to the var musicPlaylist.
		// var musicPlaylist = $.getJSON("https://itunes.apple.com/search?term=abba", function(searchResults) {
		// console.log(searchResults)

			for(var index=0; index < searchResults['resultCount'];index++){

				var targetResult = searchResults['results'][index];

				var artist_name = targetResult['artistName'];
				  // console.log(artist_name);

				var title = targetResult['trackName'];
				  // console.log(title);

				var artworkURL = targetResult['artworkUrl100'];
				 // console.log(artworkURL);

				var previewURL = targetResult['previewUrl'];
				 // console.log(previewURL);

				var track_price = targetResult['trackPrice'];
				 // console.log(track_price);

				$(".song img").eq(index).attr("src", artworkURL);
				$(".song .title").eq(index).text(title);
				$(".song .artist_name").eq(index).text(artist_name);
				$(".song .track_price").eq(index).text(track_price);
			}

			for(var index=2; index < searchResults['resultCount']; index++) {
// create elements w/jQuery 

			}
		});
}

$("#submit-button").click(submit);


// for(index === $("#playlist").length) {
// 		    		// console.log("#playlist".length)
// 		    		var divSong = $("div .song");
// 		    		$("#playlist").append(divSong);
// 		    	}

	// // 	if (index === $("tr").length) {
	// // 		var tableRow = $("<tr>");
	// // 		var tableTD = $("<td>").addClass("title").text(titleResults);

	// // 		tableRow.append(tableTD);
	// // 		$("#movie-table").append(tableRow);
	// // 	};
	// // };

	// 						if (index === $("div #playlist").length) {
								        
	// 							var divPlaylist= $("div #playlist");
	// 								// console.log(divPlaylist)
	// 							var divSong = $("div #song");
	// 								// console.log(divSong)
	// 							// var img = $("img").attr("src", previewURL);
	// 							// 	console.log(img)
	// 							var title = $(".title").text(title);
	// 								console.log(title)
	// 							// var artistName = $(".artist_name").text(artist_name);
	// 							// 	console.log(artistName)
	// 							// var trackPrice = $(".track_price").text(track_price);
	// 							// 	console.log(trackPrice)
	// 							// var listenHere = $("a").attr("src", previewURL);
	// 							// 	console.log(listenHere)

	// 							divPlaylist.append(divSong);
	// 							divSong.append(title);
	// 						};
