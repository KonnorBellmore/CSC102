// Function to check if a given string is a palindrome
function isPalindrome(str) {
    // Remove spaces and convert to lowercase for uniformity
    let cleanedStr = str.replace(/\s+/g, '').toLowerCase();

    // Reverse the string
    let reversedStr = cleanedStr.split('').reverse().join('');

    // Compare original and reversed strings
    return cleanedStr === reversedStr;
}

// Function to handle form submission
document.getElementById("palindromeForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent page reload

    // Get user input
    let userInput = document.getElementById("userInput").value;

    // Check if input is a palindrome
    let resultMessage = isPalindrome(userInput)
        ? `"${userInput}" is a palindrome! 🎉`
        : `"${userInput}" is NOT a palindrome. ❌`;

    // Display the result
    document.getElementById("result").innerHTML = resultMessage;

    // Show Restart Button
    document.getElementById("restartBtn").style.display = "block";
};

// Function to restart the check process
function restartCheck() {
    document.getElementById("userInput").value = ""; // Clear input field
    document.getElementById("result").innerHTML = ""; // Clear result message
    document.getElementById("restartBtn").style.display = "none"; // Hide button
}
