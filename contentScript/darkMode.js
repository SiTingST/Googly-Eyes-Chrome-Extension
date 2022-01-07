
console.log("dark mode script activated!")

chrome.runtime.onMessage.addListener(toggleDark);

function toggleDark(message, sender, sendResponse) {
    msg = message
    
    if (msg == "dark") {
        document.querySelector("html").style.filter="invert(1) hue-rotate(180deg)";
        let media = document.querySelectorAll("img, pictures, video");
        media.forEach((mediaItem)=>{
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
        })
    } 
    
    if (msg == "light") {
        document.querySelector("html").style.filter="invert(0) hue-rotate(0deg)";
        let media = document.querySelectorAll("img, pictures, video");	
        media.forEach((mediaItem)=>{
            mediaItem.style.filter = "invert(0) hue-rotate(0deg)"
        })
    }
}