const toggleDarkModeButton = document.querySelector('#darkModeCheckBox')

toggleDarkModeButton.addEventListener("click", () => {

    if(document.querySelector('#darkModeCheckBox:checked')) {
        document.querySelector("html").style.filter="invert(1) hue-rotate(180deg)";
        let media = document.querySelectorAll("img, pictures, video");
        media.forEach((mediaItem)=>{
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
        })
    } else{
        document.querySelector("html").style.filter="invert(0) hue-rotate(0deg)";

        let media = document.querySelectorAll("img, pictures, video");
        
        media.forEach((mediaItem)=>{
            mediaItem.style.filter = "invert(0) hue-rotate(0deg)"
        })
    }
})