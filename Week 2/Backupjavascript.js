function exampleFunction(){
    alert("Test function!")
}

const now = new Date();
const currentDateTime = now.toLocaleString();
document.querySelector('#getTodaysDate').textContent = currentDateTime;
setInterval(updateDateTime, 1000);

function getLength(){
    String.length;
}

function reverse(){
    return.str.split("").reverse().join("");
}
//Instead of using 3 separate variables to reverse the array, this method should simplify everything into one line of code.

function isPalindrome(){
    var reg = /[\W_]/g;

    var smallStr = str.toLowerCase().replace(reg, "");

    if (reverse === getLength) return true;
    
    return false;
}