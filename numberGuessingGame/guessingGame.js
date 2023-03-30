function guessGame() {
    let tries = 0;
    const maxTries = 5;
    let isCorrect = false;
    const jackpotNumber = Math.floor(Math.random() * 1000) + 1;

    while (tries < maxTries && !isCorrect) {
        const userGuess = parseInt(prompt(`Guess a number between 1 and 1000. You have ${maxTries - tries} attempts remaining.`));
        if (userGuess === jackpotNumber) {
            alert("Congratulations! You won.");
            isCorrect = true;
        } else {
            alert(`You guessed ${userGuess}. Try again!`);
        }
        tries++;
    }

    if (!isCorrect) {
        let response = prompt(`You lost! Better luck next time. The correct number was ${jackpotNumber}. Would you like to reset or quit game? Enter "reset" or "quit".`);
        while (response !== "reset" && response !== "quit") {
            response = prompt(`Invalid response. Please enter "reset" or "quit".`);
        }
        if (response === "reset") {
            guessGame();
        } else {
            alert("Thanks for playing.");
        }
    }
}

guessGame();