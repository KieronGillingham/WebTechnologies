window.onload = main();

var random_number;
var number_of_guesses;

var button_guess;
var button_reset;
var user_guess;
var output;
var test;



function main()
{
    console.log("Loaded");

    button_guess = document.getElementById("checkButton");
    button_reset = document.getElementById("resetButton");
    user_guess =   document.getElementById("userGuess");
    output =       document.getElementById("output");
    test =         document.getElementById("test");
    
    console.log(button_guess);
    console.log(button_reset);
    console.log(user_guess);
    console.log(output);
    console.log(test);
    
    button_reset.onclick = reset();
    button_guess.onclick = guess(parseInt(user_guess.value));
    
    reset();
}

function generateNumber()
{
    random_number = Math.round(Math.random() * 100);
    test.innerHTML = random_number;
}

function guess(userGuess)
{
    countGuess();
    
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
    generateNumber();
    number_of_guesses = 0;
}

function countGuess()
{
    number_of_guesses++;
}