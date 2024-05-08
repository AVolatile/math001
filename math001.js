// Function to get two values and multiply them together
function multiplyNumbers() {
    
    // Get the values entered by the user
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Multiply the numbers
    var result = num1 * num2;

    // Display the results
    document.getElementById("result").innerHTML = `<p style="color: crimson">The result is: ${result}`;

}



