const input = document.getElementById("numInput");
const elementTxt = document.getElementById("elements");
const sumTxt = document.getElementById("sum");
const highTxt = document.getElementById("high");
const lowTxt = document.getElementById("low");

let arr = [];

function insertNumber() {
    const val = parseFloat(input.value);

    if (!isNaN(val)) {
        arr.push(val); // Add the new number to our list
        input.value = ""; // Clear the input box
        input.focus();    // Put the cursor back in the box for the next number
        updateUI();
    }
}

function updateUI() {
    // 1. Display the list
    elementTxt.innerHTML = arr.join("<br>");

    if (arr.length > 0) {
        // 2. Calculate Sum
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        // 3. Find Highest and Lowest using Math methods
        // The ...arr is the "spread operator" which expands the array into individual numbers
        let highest = Math.max(...arr);
        let lowest = Math.min(...arr);

        // 4. Update the screen
        sumTxt.innerHTML = sum;
        highTxt.innerHTML = highest;
        lowTxt.innerHTML = lowest;
    }
}

function deleteAll() {
    arr = []; // Empty the array
    elementTxt.innerHTML = "";
    sumTxt.innerHTML = "";
    highTxt.innerHTML = "";
    lowTxt.innerHTML = "";
}