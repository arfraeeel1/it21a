const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function mainMenu() {
    console.log("factorial Application");

console.log("1. Say Hello");
console.log("2. Compute factorial");
console.log("3. Exit");

rl.question("Enter your choice (1-3)", choice => {
    
if(choice === "1") {
    console.log("Hello There");
    backtomenu();

} else if (choice === "2") {
    console.log("Factorial");
    computeFactorial();
    backtomenu();

} else if (choice === "3") {
    console.log("Exiting progam... Goodbye");
    rl.close(); 

} else {
    console.log("Invalid choice. Please try Again");
    mainMenu();   
}

});

}


function computeFactorial(){
    rl.question("Enter a number for factorial: ", (numster) => { 
        let num = parseInt(numster);
        
        if (isNaN(num) || num < 0) { 
            console.log("Please enter a non-negative integer");
        } else {
            let fact = 1;
            for (let i = 1; i <= num; i++) { 
                fact *= i;
            }
            console.log("The factorial of " + num + " is " + fact); 
        }

        backtomenu();
    });
}
function backToMenu(){
    rl.question("----------");
    console.log("1. back to menu");
    console.log("2. Exit");

    rl.question("What would you like to do next? (!-2) : ", (backtomenuchoice) => {
        if (backtomenuchoice === "1") {
            mainMenu();
        } else if (backtomenuchoice ==="2") {
            console.log("Exiting program.... Goodbye!");
            rl.close();
        } else {
            console.log("Invalid choice. Please try Again");
        
        backtomenuchoice();
    }
});
}
mainMenu();