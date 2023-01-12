let premierEnfant = document.getElementsByTagName("div")[0].firstChild;

console.log(premierEnfant);


let div = document.getElementsByTagName("div");
let dernierEnfant = div[div.length-1].lastChild;

console.log(dernierEnfant);


let i = div[div.length-1].getElementsByTagName("p")[0].getElementsByTagName("i")[0];

console.log(i);


let b = div[div.length-1].getElementsByTagName("p")[1].getElementsByTagName("b")[0];

console.log(b);



let parentI = document.getElementsByTagName("i")[0].parentNode;

console.log(parentI);


let parentB = document.getElementsByTagName("b")[0].parentNode;

console.log(parentB);




let lastDiv= div[div.length-1];
let next = lastDiv.firstChild;

let test = lastDiv.childNodes[2];

console.log(test);