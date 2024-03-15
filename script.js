window.onload = function() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirm-password");
    var submitButton = document.querySelector("input[type='submit']");

    submitButton.onclick = function(event) {
        if (password.value !== confirmPassword.value) {
            event.preventDefault();
            alert("Passwords do not match");
        }
    };
};
