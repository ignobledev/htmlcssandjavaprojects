let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn0 = true;
const winPattern = [
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 5],
[3, 4, 6],
[6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
console.log("box was clicked");
if(turn0){
box.innerText = "X";
turn0= false;
}
else{
turn0 = true;
box.innerText = "O";
}
box.disabled = true;
checkWinner();

});
});
const shoWinner = (winner) => {
msg.innerText =  `Congratulation,winner is ${winner}`;
msgContainer.classList.remove("hide");


}
const checkWinner = () => {
for( let pattern of winPattern){
let pos1Val = boxes[pattern[0]].innerText;
let pos2Val = boxes[pattern[1]].innerText;
let pos3Val = boxes[pattern[2]].innerText;
if(pos1Val!= "" && pos2Val != "" && pos3Val !=""){
if(pos1Val === pos2Val && pos2Val === pos3Val){
console.log("winner",pos1Val);
showWinner(pos1Val);
}
}
}
};
