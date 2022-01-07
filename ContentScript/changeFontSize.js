
console.log("font size script activated!")

chrome.runtime.onMessage.addListener(changeFontSize);

function changeFontSize(message, sender, sendResponse) {
    fontSize = parseInt(message)

    if (fontSize >=25 || fontSize <= 250){
        console.log("Running")
        
        fontSize = fontSize + "%"
        allElements = document.querySelectorAll('*');
        for (items of allElements) {
            items.style["fontSize"] = fontSize;
        }
    }
}