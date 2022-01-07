function feedbackResponse() {
    return alert('Thank you for your response!')
}

console.log("here i am")

const darkModeToggleButton = document.querySelector('#darkModeCheckBox')

darkModeToggleButton,addEventListener("click", () => {

    if(document.querySelector('#darkModeCheckBox:checked')) {
      chrome.tabs.executeScript({
          file:"../contentScript/darkMode.js"
      })
    } else{
        chrome.tabs.executeScript({
            file:"../contentScript/lightMode.js"
        })
    }

})
