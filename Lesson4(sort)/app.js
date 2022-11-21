let myCar =new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
console.log(myCar);

var myObj =new Object(),
str = "myString",
rand = Math.random(),
obj =new Object();

myObj.type = "Dot syntax";
myObj["date created"] = "String with space";
myObj[str] = "String value";
myObj[rand] = "Random Number";
myObj[obj] ="Object";
myObj[""]               = "Even an empty string";
console.log(myObj);
localStorage.setItem("name", "Alex");
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');
localStorage.clear();

let arr_of_students = 
[
  {
    name : "Петя",
    аге: 28,
    gpa: 90
  },
  {
    name : "Максим",
    аге: 30,
    gpa: 80
  },
  {
    name : "Светлана",
    аге: 21,
    gpa: 4
  },
  {
    name : "Даша",
    аге: 32,
    gpa: 50
  },
  {
    name : "Анна",
    аге: 19,
    gpa: 8.5
  },
  {
    name : "Ян",
    аге: 30,
    gpa: 30
  },
];

const sorted = arr_of_students.filter(function myFilter (key){
    return key.gpa >=7;
});
sorted.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(sorted);
localStorage.setItem(sorted, JSON.stringify(sorted));
sorted = JSON.parse(localStorage.getItem("sorted"));
console.log(typeof sorted);
console.log("Итоговый массив: ", {sorted});

function getStudent(_arr) {
    let localVar = 44;
    console.log("LocalVar =", localVar);
    console.log("_arr =", _arr);
}
getStudent(arr_of_students);
console.log("LocalVar =", localVar);