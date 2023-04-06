function guessGame() {
    const userGuessInput = document.getElementById("userGuessInput");
    const guessButton = document.getElementById("guessButton");
    const userGuessText = document.getElementById("userGuessText");
    const playButton = document.getElementById("playButton");
    const exitButton = document.getElementById("exitButton");

    let tries = 0;
    const maxTries = 5;
    let isCorrect = false;
    let jackpotNumber = Math.floor(Math.random() * 1000) + 1;

    function resetGame() {
        tries = 0;
        isCorrect = false;
        jackpotNumber = Math.floor(Math.random() * 1000) + 1;
        userGuessText.innerText = "Guess a number between 1 and 1000";
        userGuessInput.disabled = false;
        guessButton.disabled = false;
        playButton.disabled = true;
        exitButton.disabled = false;
    }

    function exitGame() {
        userGuessText.innerText = `You lost! The correct number was ${jackpotNumber}. Thanks for playing.`;
        userGuessInput.disabled = true;
        guessButton.disabled = true;
        playButton.disabled = false;
        exitButton.disabled = true;
    }

    function guess() {
        const userGuess = parseInt(userGuessInput.value);
        if (userGuess === jackpotNumber) {
            userGuessText.innerText = "Congratulations! You won.";
            isCorrect = true;
            exitGame();
        } else if (tries >= maxTries - 1) {
            userGuessText.innerText = `You lost! The correct number was ${jackpotNumber}.`;
            exitGame();
        } else if (userGuess < jackpotNumber) {
            userGuessText.innerText = `You guessed ${userGuess}. Try a higher number. You have ${maxTries - tries - 1} attempts remaining.`;
        } else {
            userGuessText.innerText = `You guessed ${userGuess}. Try a lower number. You have ${maxTries - tries - 1} attempts remaining.`;
        }
        tries++;
        userGuessInput.value = "";
    }

    guessButton.addEventListener("click", guess);
    playButton.addEventListener("click", resetGame);
    exitButton.addEventListener("click", exitGame);
}

guessGame();