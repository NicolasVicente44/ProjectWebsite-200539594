let total = "";

total.innerHTML = "$0";

let add = document.getElementById("add");

let subtract = document.getElementById("subtract");

let value = 0;
// let item = "$" + 25;
let item = `$ ${value}`;


document.getElementById("total").addEventListener("click", added);

function added() {
    value = value + 25;
    console.log(value);
    item = `$ ${value}`;
    let x = document.getElementById("add").value;
    document.getElementById("total").innerHTML = total + "Total: " +  item;
}

function subtracted() {
    if (value > 0) {
    value = value - 25;
    console.log(value);
    item = `$ ${value}`;
    let x = document.getElementById("add").value;
    document.getElementById("total").innerHTML = total + "Total: " +  item;
    }
}



    
 


