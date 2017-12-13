var inputPassword = document.getElementById("inputPassword"),
    confirmPassword = document.getElementById("confirmPassword");

function validateLength() {
    if (inputPassword.value.length < 8) {
        inputPassword.setCustomValidity("Password Is Too Short");
    } else {
        inputPassword.setCustomValidity('');
    }
}

function validatePassword() {
    if (inputPassword.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords Don't Match");
    } else {
        confirmPassword.setCustomValidity('');
    }
}

inputPassword.onkeyup = validateLength;
confirmPassword.onkeyup = validatePassword;