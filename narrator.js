var isInitialized = false;

if(!isInitialized) {
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request.command) {
			console.log("Request: " + request.command);
			if(request.command == "readText") {
				readText();
			}
		}
	});

	function readText() {
		var s = window.getSelection().toString();
		if(s && s.length) {
			chrome.runtime.sendMessage({utterance: s.toString()}, function(response) {
				if(response) { console.log(response); }
			});
		} else {
			console.log("Nothing selected to read!");
		}
	}
	
	isInitialized = true;
}