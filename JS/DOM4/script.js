let box = document.querySelector(".box");
console.log(box);

box.innerHTML;
box.innerText;

document.querySelector(".container").innerHTML;
document.querySelector(".container").innerText;     // ignores hidden text, Respects CSS, slower
document.querySelector(".container").textContent;   // Includes hidden text, ignores CSS, faster

console.log(document.querySelector(".container").outerHTML);    // returns itself and innerHTML
console.log(document.querySelector(".container").tagName);      // applicable to only element nodes
console.log(document.querySelector(".container").nodeName);     // applicable to all the nodes

// document.querySelector(".container").hidden;
// document.querySelector(".container").hidden = true;

document.querySelector(".box").innerHTML = "Hey! I am AZEEM";

console.log(document.querySelector(".box").hasAttribute("style"));     
console.log(document.querySelector(".box").getAttribute("style"));  
document.querySelector(".box").setAttribute("style", "color: brown");

console.log(document.querySelector(".box").attributes);

document.querySelector(".box").removeAttribute("style");

document.designMode = "on";     // edit any website

document.getElementById("databox").dataset;     // access data attributes

// inserting and removing classes
console.log(document.querySelector(".container").classList);
console.log(document.querySelector(".container").className);
document.querySelector(".container").classList.add("code-azeem");
document.querySelector(".container").classList.remove("code-azeem");
document.querySelector(".container").classList.toggle("red");


