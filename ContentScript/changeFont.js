console.log("change Font activated!!")

chrome.runtime.onMessage.addListener(changeFont);

function changeFont(message, sender, sendResponse) {
    // console.log(typeof message);
    fontNo = message
    allElements = document.querySelectorAll('*');
    switch(fontNo) {
    case "a":
        // Arial
        for (items of allElements) {
            items.style["font-family"] = 'Arial';
        }
        break;
    case "b":
        // Comic Sans
        for (items of allElements) {
            items.style["font-family"] = 'Comic Sans';
        }
        break;
    case "c":
        // Calibri
        for (items of allElements){
            items.style["font-family"] = 'Calibri';
        }
        break;
    case "d":
        // Verdana
        for (items of allElements){
            items.style["font-family"] = 'Verdana';
        }
        break;
    case "e":
        // Tahoma
        for (items of allElements){
            items.style["font-family"] = 'Tahoma';
        }
        break;
    case "f":
        // Open Sans
        for (items of allElements){
            items.style["font-family"] = 'Open Sans';
        }
        break;
    case "g":
        // Roboto 
        for (items of allElements){
            items.style["font-family"] = 'Roboto';
        }
        break;
    case "h":
        // Helvetica
        for (items of allElements){
            items.style["font-family"] = 'Helvetica';
        }
        break;
    default:
        break;
    }
}
