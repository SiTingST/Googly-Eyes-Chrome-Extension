chrome.runtime.onMessage.addListener(changeFontColor);

function changeFontColor(message, sender, sendResponse) {
    console.log(typeof message);
    colorNo = message
    allElements = document.querySelectorAll('*');
    switch(fontNo) {
    case "1":
        for (items of allElements) {
            items.style["color"] = '#000000';
        }
        break;
    case "2":
        for (items of allElements) {
            items.style["color"] = '#332288';
        }
        break;
    case "3":
        for (items of allElements){
            items.style["color"] = '#785EF0';
        }
        break;
    case "4":
        for (items of allElements){
            items.style["color"] = '#0C7BDC';
        }
        break;
    case "5":
        for (items of allElements){
            items.style["color"] = '#56B4E9';
        }
        break;
    case "6":
        for (items of allElements){
            items.style["color"] = '#DC267F';
        }
        break;
    case "7":
        for (items of allElements){
            items.style["color"] = '#FE6100';
        }
        break;
    case "8":
        for (items of allElements){
            items.style["color"] = '#FFC20A';
        }
        break;
    default:
        break;
    }
}