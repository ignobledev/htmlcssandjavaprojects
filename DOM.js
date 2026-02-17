

let nam = document.querySelector("#name");
nam.onclick = (e) =>{
console.log(e);
let a = 25;
a++;
console.log(a);
console.log(e.type);
console.log(e.target);
console.log(e.clientX,e.clientY);



};
let hov = document.querySelector("#box");
hov.onmouseover = (e) =>{
console.log(e.type);
console.log(e.target);
console.log(e.clientX,e.clientY);
let a = 25;
a++;
console.log(a);


};
btn1.addEventListener("click", () => {

console.log("button1 was click");

});
let div = document.querySelector("div");
