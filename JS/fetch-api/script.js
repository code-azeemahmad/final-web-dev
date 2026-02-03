/*
fetch API
The Fetch API provides an interface for fetching (sending/ receiving) resources.
It uses Request and Response objects.
The fetch() method is used to fetch a resource (data).
let promise = fetch(url, [options])     // returns a promise which is called response
*/

/*
API - Application Programming Interface
API works on request/ response cycle.
APIs are nothing but URL end points (Response (Array of Image Objects))
calling api does not reload the page. The page updates at runtime.
Fetch with no options produces a GET request
*/

const URL = "https://catfact.ninja/fact";

// const getFacts = async () => {
//     console.log("getting data...");
//     let response = await fetch(URL);
//     console.log(response);      // JSON format
//     let data = await response.json();       // JSON --> JS  Object
//     // console.log(data);      // Useable Data
//     // console.log(data.fact);
// }

let btn = document.querySelector("#btn");
let para = document.querySelector("#fact");

const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    para.innerText = data.fact;
}

btn.addEventListener("click", getFacts);

/*
Understanding Terms:
--> AJAX is Asynchronous JS & XML (AJAJ)
--> JSON is JavaScript Object Notation
    json() method : returns a second promise that resolves with the result of parsing the
    response body text as JSON. (Input is JSON, output is JS object). It's also asynchronous.
*/

// using promise chaining

// function getFacts() {
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         para.innerText = data.fact;
//     });
// }
// btn.addEventListener("click", getFacts);