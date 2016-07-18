$(document).ready(function () {
	$('.nPage').hide();
	var nextPageToken = "";
	function getResults(query) {
		$.getJSON("https://www.googleapis.com/youtube/v3/search",
			{
				"part": "snippet",
				"key": "AIzaSyB9uBt5ebpR9B0TFu4CYaw56YjEoBB8NBM",
				"q": query,
				"maxResults": 10,
				"nextPageToken": "",
			},
			function (data) {
				displaySearchResults(data.items);
				console.log(data);
			}
		);
	};
	function displaySearchResults(videos) {
		var html = "";
		$.each(videos, function (index, video) {
			var title = video.snippet.title;
			var url = "https://www.youtube.com/watch?v=";
			var url2 = "https://www.youtube.com/channel/";
			var vlink = video.id.videoId;
			var clink = video.id.channelId;
			var vyLink = url+vlink;
			var cyLink = url2+clink;
			var image = video.snippet.thumbnails.high.url;
			var cCheck = function(){
				if (typeof vlink == 'undefined') {
					return true;
				}
			};
			if (cCheck()==true) {
				html += "<li><p>"+title + " - " + "[Channel]" + "</p><a target='_blank' href='"+cyLink+"'><img src='"+image+"'/></li>"
			}
			else {
			html += "<li><p>"+title+"</p><a href='"+vyLink+"' data-lity><img src='"+image+"'/></li>"
			};
			$("#search-results ul").html(html);
	});

};
	$("#search-form").submit(function (event) {
		event.preventDefault();
		getResults($("#query").val());
		$('.nPage').show();
	});
});
