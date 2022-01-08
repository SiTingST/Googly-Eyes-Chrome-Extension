
console.log("font size script activated!")

chrome.runtime.onMessage.addListener(changeFontSize);

function changeFontSize(message, sender, sendResponse) {
    fontSize = message
    len = fontSize.length

    if (fontSize.charAt(len-1) == "%"){
        console.log("Running")

        fontSize = fontSize
        allElements = document.querySelectorAll('*');
        for (items of allElements) {
            items.style["fontSize"] = fontSize;
        }
    }
}