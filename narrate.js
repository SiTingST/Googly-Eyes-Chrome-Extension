function narrate(toRead, callback) {
	chrome.tts.speak(
		toRead, 
		{ 
			onEvent: function(ttsEvent) {
				if(ttsEvent.type == "error") { console.error("TTS Error:", ttsEvent); }
			}
		},
		function() {
			if(chrome.runtime.lastError !== undefined) { 
				console.error("Runtime error:", chrome.runtime.lastError.message); 
			}
			callback && callback();
		}
	);
}