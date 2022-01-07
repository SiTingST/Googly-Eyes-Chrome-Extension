function feedbackResponse() {
    return alert('Thank you for your response!')
}

document.getElementById("Zoom Font").addEventListener("input", (e) => {
    let size = e.target.value + "%";
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.fontSize = "' + size + '";'});
    });
});