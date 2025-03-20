// Function to generate a random number between 1 and 6 (simulating a die roll)
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to play the Craps game when the button is clicked
function playCraps() {
    // Roll two dice
    var die1 = rollDie();
    var die2 = rollDie();

    // Calculate the sum of the two dice
    var sum = die1 + die2;

    // Display the dice rolls
    document.getElementById("diceRolls").innerHTML = "You rolled: " + die1 + " and " + die2 + " (Sum: " + sum + ")";

    // Craps rule: If sum is 7 or 11, player loses
    if (sum === 7 || sum === 11) {
        document.getElementById("gameResult").innerHTML = "CRAPS! You lose!";
    }
    // Rule: If both dice are even and the same, player wins
    else if (die1 === die2 && die1 % 2 === 0) {
        document.getElementById("gameResult").innerHTML = "You won! You rolled even doubles!";
    }
    // Otherwise, the player pushes
    else {
        document.getElementById("gameResult").innerHTML = "You pushed! Try again!";
    }
}
