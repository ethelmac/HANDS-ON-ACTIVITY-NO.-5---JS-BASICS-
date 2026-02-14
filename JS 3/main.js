const input = document.getElementById("numInput");
const elementTxt = document.getElementById("elements");
const sumTxt = document.getElementById("sum");
const highTxt = document.getElementById("high");
const lowTxt = document.getElementById("low");

let arr = [];

function insertNumber() {
    const val = parseFloat(input.value);

    if (!isNaN(val)) {
        arr.push(val); 
        input.value = ""; 
        input.focus();    
        updateUI();
    }
}

function updateUI() {
   
    elementTxt.innerHTML = arr.join("<br>");

    if (arr.length > 0) {
        
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        
        let highest = Math.max(...arr);
        let lowest = Math.min(...arr);

        
        sumTxt.innerHTML = sum;
        highTxt.innerHTML = highest;
        lowTxt.innerHTML = lowest;
    }
}

function deleteAll() {
    arr = []; 
    elementTxt.innerHTML = "";
    sumTxt.innerHTML = "";
    highTxt.innerHTML = "";
    lowTxt.innerHTML = "";

}
