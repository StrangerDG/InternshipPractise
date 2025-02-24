function showAlert() {
    alert("successfully submitted ");
}
   

/*calculator*/


    // Reference to the display element
    const display = document.getElementById('display');

    // Function to append a value to the display
    function appendValue(value) {
      display.value += value;
    }

    // Function to clear the display
    function clearDisplay() {
      display.value = '';
    }

    // Function to calculate the result
    function calculateResult() {
      try {
        display.value = eval(display.value); // Use eval to evaluate the expression
      } catch (error) {
        display.value = 'Error'; // Display an error for invalid input
      }
    }<button class="equal" onclick="calculateResult()">=</button>
 

