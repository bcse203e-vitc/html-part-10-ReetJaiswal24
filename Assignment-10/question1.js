function numberGuessingGameWhile() {
    const numberToGuess = Math.floor(Math.random() * 50) + 1; 
    let guess = 0;
    while (guess !== numberToGuess) {
        guess = parseInt(prompt("Guess a number between 1 and 50:"));
        if (guess < numberToGuess) {
            console.log("Too low! Try again.");
        } else if (guess > numberToGuess) {
            console.log("Too high! Try again.");
        } else {
            console.log("Congratulations! You guessed the correct number!");
            break;
        }
    }
}
numberGuessingGameWhile();
