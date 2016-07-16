$(document).ready(function () {
	function getResults(query) {
		$.getJSON("https://www.googleapis.com/youtube/v3/search",
			{
				"part": "snippet",
				"key": "AIzaSyB9uBt5ebpR9B0TFu4CYaw56YjEoBB8NBM",
				"q": query
			},
			function (data) {
				displaySearchResults(data.items);
				console.log(data.items);
			}
		);
	};


	function displaySearchResults(videos) {
		var html = "";
		$.each(videos, function (index, video) {
			html = html + "<li><p>" + video.snippet.title +
				"</p><a target='_blank' href='https://www.youtube.com/watch?v=" + video.id.videoId + " '>'<img src='" +  video.snippet.thumbnails.high.url + "'/></li>"
		});
		$("#search-results ul").html(html);
	}

	$("#search-form").submit(function (event) {
		event.preventDefault();
		getResults($("#query").val());
	});

});
