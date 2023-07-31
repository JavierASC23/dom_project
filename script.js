// Add your code to this file

let body = document.querySelector("body");
body.style["background-color"] = "blue";

let images = document.querySelectorAll("img");

for(let f = 0; f < images.length; f++){

    images[f].style["border-style"] = "dashed";
    images[f].style["border-color"] = "orange";

}

console.log(images);

