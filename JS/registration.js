var inputPassword = document.getElementById("inputPassword"),
    confirmPassword = document.getElementById("confirmPassword");

function validatePassword() {
    if (inputPassword.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords Don't Match");
    } else {
        confirmPassword.setCustomValidity('');
    }
}

inputPassword.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;