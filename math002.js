// Function to get two numbers from user input and multiply them
function multiplyNumbers() {
    
    // Declaring the number boxes to gather user input
    var numberOne = parseFloat(document.getElementById("numberOne").value);
    var numberTwo = parseFloat(document.getElementById("numberTwo").value);

    // Multiply the numbers together
    var results = numberOne * numberTwo;

    // Display the results
    document.getElementById("result").innerHTML = `<p style="color: crimson">The result is: ${results}`;

}

// Function to add two numbers
function addNumbers() {
    var addNumberOne = parseFloat(document.getElementById("addNumberOne").value);
    var addNumberTwo = parseFloat(document.getElementById("addNumberTwo").value);
    var addResult = addNumberOne + addNumberTwo;
    document.getElementById("addResult").innerHTML = `<p style="color: crimson">The result of addition is: ${addResult}</p>`;
}

// Function to subtract two numbers
function subtractNumbers() {
    var subNumberOne = parseFloat(document.getElementById("subNumberOne").value);
    var subNumberTwo = parseFloat(document.getElementById("subNumberTwo").value);
    var subResult = subNumberOne - subNumberTwo;
    document.getElementById("subResult").innerHTML = `<p style="color: crimson">The result of subtraction is: ${subResult}</p>`;
}




