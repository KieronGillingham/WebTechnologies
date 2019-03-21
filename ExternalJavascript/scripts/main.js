var random_number;
var number_of_guesses;

var button_guess;
var button_reset;
var user_guess;
var output;

window.onload = function main()
{
    console.log("Main called from " + this);

    button_guess = document.getElementById("checkButton");
    button_reset = document.getElementById("resetButton");
    user_guess =   document.getElementById("userGuess");
    output =       document.getElementById("output");
    
    
    console.log(button_guess);
    console.log(button_reset);
    console.log(user_guess);
    console.log(output);
    
    button_reset.onclick = reset;
    button_guess.onclick = guess;
    
    reset();
}

function generateNumber()
{
    console.log("Generate new Number");
    random_number = Math.round(Math.random() * 99) + 1;
}

function guess()
{
    console.log("Process guess");
    countGuess();
    
    var userGuess = user_guess.value;

    if (userGuess > random_number)
    {
        output.innerHTML = "Too high.";
    }
    else if (userGuess < random_number)
    {
        output.innerHTML = "Too low.";
    }
    else
    {
        if (number_of_guesses > 1) 
        {
            output.innerHTML = "Correct. Found with " + number_of_guesses + " guesses.";
        }
        else
        {
            output.innerHTML = "Correct! First try!";
        }
    }
}

function reset()
{
    console.log("Reset");
    generateNumber();
    number_of_guesses = 0;
}

function countGuess()
{
    number_of_guesses++;
}