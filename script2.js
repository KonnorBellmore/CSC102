// Function to validate the form input
function validateForm(event) {
    event.preventDefault(); // Prevents form submission

    // Retrieving values from input fields
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var zipCode = document.getElementById("zipCode").value.trim();

    // Combining first name and last name
    var fullName = firstName + " " + lastName;

    // Validation Messages
    var message = "";

    // Validate Name Length
    if (fullName.length > 20) {
        message += "Error: Name must not exceed 20 characters.<br>";
    }

    // Validate ZIP Code (5-digit format)
    if (!/^\d{5}$/.test(zipCode)) {
        message += "Error: ZIP Code must be exactly 5 digits.<br>";
    }

    // Display validation message or reveal the secret message
    var validationMessage = document.getElementById("validationMessage");
    var secretMessage = document.getElementById("secretMessage");

    if (message !== "") {
        validationMessage.innerHTML = message; // Show error messages
        secretMessage.style.display = "none"; // Hide the secret message
    } else {
        validationMessage.innerHTML = ""; // Clear any previous errors
        secretMessage.style.display = "block"; // Show the secret message
    }
}
