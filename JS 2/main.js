const fNameInput = document.getElementById("fname");
const mNameInput = document.getElementById("mname");
const lNameInput = document.getElementById("lname");
const resultTxt = document.getElementById("displayFullname");

function generateFullname() {
    
    const fullName = fNameInput.value + " " + mNameInput.value + " " + lNameInput.value;
    resultTxt.innerHTML = fullName.trim();
}

function clearEntries() {
    fNameInput.value = "";
    mNameInput.value = "";
    lNameInput.value = "";
    resultTxt.innerHTML = "";

}
