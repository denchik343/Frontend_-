let mainText = document.getElementById("main-text");

mainText.style.color = "blue";

let highlights = document.getElementsByClassName("highlight");

for (let highlight of highlights){
highlight.style.fontSize = "24px";
}


let newParagraph = document.createElement("p");
newParagraph.innerText = "Привет из  JS!";
document.body.appendChild(newParagraph);

let button = document.getElementById("btn");

button.addEventListener("click", function(){
    alert('Кнопка нажата!')
    let message = document.getElementById("message");
    message.innerText = "Кнопка нажата!";
})

function handleClick1(){
    alert("Кнопка нажата!");
}

let darkThemeButton = document.getElementById("darkTheme");
let lightThemeButton = document.getElementById("lightTheme");

darkThemeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "while"
})

lightThemeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
})

//pflfybt 1
let button1 = document.getElementById("btn1");

button1.addEventListener("click", function(){
    let message1 = document.getElementById("message1");
    message1.innerText = "Добро пожаловать!";
})

//pflfybt 3

let Button2Theme = document.getElementById("button2Theme");
let Button3Theme = document.getElementById("button3Theme");
let Button4Theme = document.getElementById("button4Theme");

button2Theme.addEventListener("click", function(){
    document.body.style.backgroundColor = "red"
})

button3Theme.addEventListener("click", function(){
    document.body.style.backgroundColor = "green"
})

button4Theme.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue"
})

//pflfybt 2
let Div1 = document.getElementById("div1");
let Text = document.getElementById("text");
let Submit = document.getElementById("submit");

Submit.addEventListener("click", function(){
    alert('Привет Денис')
})

function handleClick(){
    alert("Привет Денис");
}