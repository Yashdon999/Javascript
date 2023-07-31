// Exercise 1: Guess the number
const randomNumber = Math.floor(Math.random() * 10) + 1;

const checkGuess = guess => guess === randomNumber ? "Congratulations! You guessed the correct number." : guess < randomNumber ? "Too low. Try again!" : "Too high. Try again!";

const userGuess = 5; // Replace with user input
console.log(checkGuess(userGuess));