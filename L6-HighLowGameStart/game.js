    // Generate a Random Number
        let randomNumber = Math.floor(Math.random() * 10 + 1)
    //guess variable to store the guessed number by user
            let guess 
    //output to store output to the user
            let output 
    //if the user guessed the number or not, initialize it to false
            let guessed = false

            let attempts = 0;


    //do/while loop, while condition is based on if the user NOT guessing the number (e.g. guessed == false)
        do {
    // Prompt user for a number between 1 and 10, or type 999 to exit.
            guess = prompt ("Think of a number between 1 and 10, or type 999 to exit.");
 
            if (guess == 999) {
                alert("Game over");
                }

            else if (guess == randomNumber) {
            alert("You guessed right! You guessed it in "
                + attempts + " guesses ");
                }

            //I f guessed number is greater than actual number
            else if (guess > randomNumber) {
                attempts++;
                alert("Sorry, that number is too big. Try a smaller number.");
                continue;
                }
            else {
                attempts++;
                alert("Sorry, that number is too small. Try a higher number.");
                continue;
                }
            
            }

            while (guessed != randomNumber);