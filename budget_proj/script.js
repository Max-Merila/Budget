// variables
let total = 0;
let deposit =[];
let withdrawal = [];

console.log("total is", total)


// function to update total
let i = deposit;
let j = withdrawal;
function updateTotal(){
    for(let i=0; i < deposit.length; i++){
      total = total+deposit[i];
    }
    for(let x=0; x<withdrawal.length; x++){
        total = total-withdrawal[x];
    }
};

// testing
deposit.push(5, 8)
withdrawal.push(6, 9, 12)
console.log("i deposit", deposit )
console.log("i withdrawaled", withdrawal)

updateTotal(); //calling the function updateTotal
console.log("updated total is", total )
// https://www.youtube.com/watch?v=6BlaKlmeWGk helped me a lot
function getDepInput(){
var y = document.getElementById("dep_display");
var x = document.getElementById("dep").value;
y.innerHTML = +x;
};

function getWitInput(){
    var y = document.getElementById("wit_display");
    var x = document.getElementById("wit").value;
    y.innerHTML = +x;
    };
    

console.log("the total is", total)
