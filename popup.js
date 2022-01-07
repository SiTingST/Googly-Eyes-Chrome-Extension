
function Init() {
	var paused = false;
	var Render = function() {
    document.getElementById("pauseResume").innerText = paused ? "Resume" : "Pause";
  };

	document.getElementById("start").addEventListener("click", function(e) { 
		chrome.tabs.query({ active: true }, function(tabs) {
			tabs.forEach(function(tab) {
				chrome.tabs.executeScript(tab.id, {file: "narrator.js" }, function(results) {
					if(results && results.every(function(o) { return o; })) {
						chrome.tabs.sendMessage(tab.id, { command: "readText" });
					}
				});
			});
		});
	});

	document.getElementById("stop").addEventListener("click", function(e) { 
		chrome.tts.stop();
		paused = false;
		Render();
	});
	
	document.getElementById("pauseResume").addEventListener("click", function(e) { 		
		chrome.tts.isSpeaking(function(isSpeaking) {
			console.log("Chrome TTS: " + (isSpeaking ? "is speaking" : "is not speaking"));
			if(isSpeaking && !paused) {
				chrome.tts.pause();
				paused = true; 
				console.log("Paused");
			} else {
				chrome.tts.resume();
				paused = false;
				console.log("Resumed");
			}			
			Render();
		});
	});

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request.utterance) {
		  narrate(request.utterance, function() { 
        sendResponse("Narrate: OK"); 
      });
		}
		Render();
	});
}

document.addEventListener("DOMContentLoaded", Init);

document.getElementById("fontSizeSlider").addEventListener("input", (e) => {
  let size = e.target.value + "%";
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.fontSize = "' + size + '";'});
  });
});