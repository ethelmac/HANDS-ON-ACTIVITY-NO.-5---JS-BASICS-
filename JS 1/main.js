const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");

// Result display elements
const sumResult = document.getElementById("sum");
const diffResult = document.getElementById("diff");
const prodResult = document.getElementById("prod");
const quotResult = document.getElementById("quot");

function calculate() {
    // Check if both fields have values
    if(num1Txt.value !== "" && num2Txt.value !== "") {
        const n1 = parseFloat(num1Txt.value);
        const n2 = parseFloat(num2Txt.value);
        
        // Calculations
        sumResult.innerHTML = n1 + n2;
        diffResult.innerHTML = n1 - n2;
        prodResult.innerHTML = n1 * n2;
        
        // Handle division by zero
        if (n2 !== 0) {
            quotResult.innerHTML = (n1 / n2).toFixed(2);
        } else {
            quotResult.innerHTML = "Error (Div by 0)";
        }
    } else {
        alert("Please enter both numbers!");
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = "";
    sumResult.innerHTML = "";
    diffResult.innerHTML = "";
    prodResult.innerHTML = "";
    quotResult.innerHTML = "";
}