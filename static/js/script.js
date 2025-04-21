function validatePhoneNumber(form) {
    let phoneNumber = form.userInput.value;

    if (!phoneNumber) {
        alert("Please provide a phone number");
    } else {
        outputResults(phoneNumber, true); // output validation results to #results-div
    }
}

function clearForm(form) {
    form.userInput.value = "";
}

function outputResults(phoneNumber, validFlag) {
    let validState; // init empty valid state string for output message
    if (validFlag) {
        validState = "Valid"
    } else {
        validState = "Invalid"
    }

    document.getElementById('results-div').innerHTML = `${validState} US number: ${phoneNumber}`;
}