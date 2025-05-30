let maintext = document.getElementById("main-text");
let highlight = document.getElementsByClassName("highlight");

maintext.style.color = "blue";




for (let i of highlight){
highlight.style.fontSize = "16px";
}

for (let i = 0; i < 4; i++) {
    console.log("highlight", i);}
    
let newParagraph = document.createElement("p");
newParagraph.innerText = "Привет из  JS!";
document.body.appendChild(newParagraph);




