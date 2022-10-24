//console.log ("app.js is ready...")

//создание переменных 

const name = "Alex";
let =lastname = "Фамилия";
var age = 36;
console.log ("Имя:", name );
console.log ("Возраст:", age );

let h1 = document.createElement ("h1");
h1.append(name);

console.log("H1 is", h1);

document.getElementsByTagName("body")[0].appendChild(h1);