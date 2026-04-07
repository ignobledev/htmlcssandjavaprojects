const btnel = document.getElementById("calculator");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.gerElementById("total");

function calculateTotal(){
const billvalue = billInput.value;
const tipvalue = tipInput.value;
const totalvalue = billValue * (1 + tipValue/100);
totalSpan.innerText = totalValue.toFixed(2);
}
btnEl.addEventListener("click",calculateTotal);

