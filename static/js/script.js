function validatePhoneNumber(form) {
    let phoneNumber = form.userInput.value;

    if (!phoneNumber) {
        alert("Please provide a phone number");
    }
}

function clearForm(form) {
    form.userInput.value = "";
}