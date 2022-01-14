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

function getDepInput(){
    var inp = document.getElementById("dep").value;
    alert("You have deposited "+ inp);
}
console.log("the total is", total)

function getWitInput(){
    var inp = document.getElementById("wit").value;
    alert("You have withdrawn "+ inp);
}

//button function to push input value to Deposit
// function getDepValue(){
//     document.getElementById("dep").value 
// };

// getDepValue();
// console.log("did I add my value input"deposit)
// // going to try and deposit the input when the button is clicked
// function updateDep(){
//     var x=document.getElementById("dep");
//     deposit.push=document.getElementById("input").value;
// }
// updateDep();
// console.log("this is my updateDep function", updateDep())