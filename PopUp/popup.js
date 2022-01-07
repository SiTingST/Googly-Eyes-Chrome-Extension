function feedbackResponse() {
    return alert('Thank you for your response!')
}

// Zoom Font
const zoomFontSlider = document.getElementById("zoomFont");
zoomFontSlider.addEventListener("input", (e) => {
    let size = e.target.value + "%";
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.fontSize = "' + size + '";'});
    });
});

// Dark Mode
const darkModeToggleButton = document.querySelector('#darkModeCheckBox')

darkModeToggleButton.addEventListener("click", () => {

    if(document.querySelector('#darkModeCheckBox:checked')) {
      chrome.tabs.executeScript({
          file:"../contentScript/darkmode.js"
      })
    } else{
        document.querySelector("html").style.filter="invert(0) hue-rotate(0deg)";
    
        let media = document.querySelectorAll("img, pictures, video");
        
        media.forEach((mediaItem)=>{
            mediaItem.style.filter = "invert(0) hue-rotate(0deg)"
        })
    }

})
