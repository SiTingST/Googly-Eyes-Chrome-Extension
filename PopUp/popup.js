function feedbackResponse() {
    return alert('Thank you for your response!')
}

const darkModeToggleButton = document.querySelector('#darkModeCheckBox')

darkModeToggleButton,addEventListener("click", () => {

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
