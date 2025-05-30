let category = "electronics"
if (category == "electronics") {
   console.log("category is electronics")  
}  else if (category == "clothing"){
    console.log("category is clothing")
} else if (category == "home"){
    console.log("category is home")
} else  {
    console.log("category is unkhown")
}

let day = 1
let dayName

switch (day) {
    case 1:
    dayName = "Monday"    
    break;

     case 2:
    dayName = "Tuesday"    
    break;

     case 3:
    dayName = "Wednesday"   
    break;

     case 4:
    dayName = "Thursday"   
    break;

     case 5:
    dayName = "Friday"    
    break;

     case 6:
    dayName = "Saturday"   
    break;

     case 7:
    dayName = "Sunday"   
    break;

    default:
    dayName = "Invalid day"
        
}

console.log("Today is" + dayName)

for (let i = 0; i < 5; i++){
console.log('повторение', i)
}

let names = ["Alice", "Bob", "Charlie"]

for (let name of names){
    console.log("имя", name)
    if (name == "Bob"){
        console.log("Нашли Боба!")
    }
}

let count = 0;

while (count < 5){
    console.log("Счетчик", count);
    count++;
}

let i = 0;
let start = true;

while (start){
    console.log("Счетчик", i);
    i++;
    if (i ==5){
        start = false;
    }
}

//do while

let j = 0

do {
    console.log("счетчик", j);
    j++;
} while (j < 5);






