// document.addEventListener('mouseup', event => {  
//   if(window.getSelection().toString().length){
//      let exactText = window.getSelection().toString();     
//      console.log(exactText);   
//   }
// });

fontSizeSlider.addEventListener("input", async (e) => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let size = e.target.value;
  chrome.storage.sync.set({ size });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changePageFontSize,
  });
});

function changePageFontSize() {
  chrome.storage.sync.get("size", ({ size }) => {
    document.body.style.fontSize = size + "%";
  });
}

let speech = new SpeechSynthesisUtterance();

// Set Speech Language
speech.lang = "en";

let voices = []; // global array of available voices

window.speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();

  // Initially set the First Voice in the Array.
  speech.voice = voices[0];
}

start.addEventListener("click", () => {
  // Set the text property with the value of the textarea
  speech.text = document.querySelector("textarea").value;

  // Start Speaking
  window.speechSynthesis.speak(speech);
});

pause.addEventListener("click", () => {
  // Pause the speechSynthesis instance
  window.speechSynthesis.pause();
});

resume.addEventListener("click", () => {
  // Resume the paused speechSynthesis instance
  window.speechSynthesis.resume();
});

cancel.addEventListener("click", () => {
  // Cancel the speechSynthesis instance
  window.speechSynthesis.cancel();
});