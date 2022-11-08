const requestURL = 'https://jsonplaceholder.typicode.com/users';

// Get all users
var xhr  = new XMLHttpRequest()
xhr.open('GET', requestURL, true)
xhr.onload = function () {
 var users = JSON.parse(xhr.responseText);
 if (xhr.readyState == 4 && xhr.status == "200") {
   console.log(xhr.responseText);
 } else {
   console.error(users);
 }
}
xhr.send(null);
xhr.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(xhr);



//const sorted = response.filter();
//sorted.sort((a, b) => a.name > b.name ? 1 : -1);
//console.log(sorted);