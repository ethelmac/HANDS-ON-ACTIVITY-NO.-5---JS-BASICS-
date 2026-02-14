const fNameInput = document.getElementById("fname");
const mNameInput = document.getElementById("mname");
const lNameInput = document.getElementById("lname");
const resultTxt = document.getElementById("displayFullname");

function generateFullname() {
    // We combine the three values with spaces
    // .trim() is used to remove any accidental extra spaces at the start or end
    const fullName = fNameInput.value + " " + mNameInput.value + " " + lNameInput.value;
    resultTxt.innerHTML = fullName.trim();
}

function clearEntries() {
    fNameInput.value = "";
    mNameInput.value = "";
    lNameInput.value = "";
    resultTxt.innerHTML = "";
}