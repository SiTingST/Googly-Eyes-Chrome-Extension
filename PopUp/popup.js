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
        console.log("dark")
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                { file:"./contentScript/darkMode.js"});
        });
    } else{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            console.log("light")

            chrome.tabs.executeScript(
                tabs[0].id,
                { file:"./contentScript/lightMode.js"});
        });
        // document.querySelector("html").style.filter="invert(0) hue-rotate(0deg)";
    
        // let media = document.querySelectorAll("img, pictures, video");
        
        // media.forEach((mediaItem)=>{
        //     mediaItem.style.filter = "invert(0) hue-rotate(0deg)"
        // })
    }

})

const letterSlider = document.getElementById("letterSlider");
letterSlider.addEventListener("input", (e) => {
    let size = e.target.value + "px";
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.letterSpacing  = "' + size + '";'});
    });
});

const brightnessSlider = document.getElementById("BrightnessSlider");
brightnessSlider.addEventListener("input", (e) => {
    let size = e.target.value + "%";
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code:'document.querySelector("html").style.filter="brightness(' + size + ')";'});
    });
});


const constrastSlider = document.getElementById("ConstrastSlider");
constrastSlider.addEventListener("input", (e) => {
    let size = e.target.value + "%";
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code:'document.querySelector("html").style.filter="contrast(' + size + ')";'});
    });
});



 fontColorButton = document.querySelector('#fontColorRadio')

 const fontColorRadioButton = document.getElementsByName("fontColorRadio");
 var fontColor;


 for(i=0; i<fontColorRadioButton.length; i++){
    fontColorRadioButton[i].addEventListener("change", (e) => {
        let colorSizeSelect = e.target.value;
        alert(this.colorSizeSelect);

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                colorSizeSelect);
          });

        
    });
}
//  fontColorRadioButton.addEventListener("click", () => {



//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.executeScript(
//             tabs[0].id,
//             { file:"./contentScript/changeFontSize.js"});
//     });
// })


