//Change font colors 

// allElements = document.querySelectorAll('*');

// for (items of allElements){
// 	items.style["color"] = '#00FF00';
// }

//Dark mode

// document.querySelector("html").style.filter="invert(1) hue-rotate(180deg)";

// let media = document.querySelectorAll("img, pictures, video");

// media.forEach((mediaItem)=>{
// 	mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
// })

//Light mode

document.querySelector("html").style.filter="invert(0) hue-rotate(0deg)";

let media = document.querySelectorAll("img, pictures, video");

media.forEach((mediaItem)=>{
	mediaItem.style.filter = "invert(0) hue-rotate(0deg)"
})

// document.querySelector("html").style.filter=" brightness(120%)";