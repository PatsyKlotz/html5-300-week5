/*Use JavaScript to read and display the initial value for each input, and then handle the change event for the inputs by displaying the new value. For most inputs, use jQuery's val() method. An exception is checkboxes. Use jQuery's prop() method.*/

(function() {
'use strict';
  
/*================================================*/
  
 /*Function to display results*/ 
  
/*DisplayResults();
 */

  
/*Function to read and display checkbox input*/
  
$( "input[type='checkbox']" ).prop( "checked", function( i, val ) {
  return !val;
});
  
  
/*Function to read and display radio input*/
  
 function processInputText() {
  
  var inputs = document.getElementsByTagName('radioform');
  var value0 = inputs[0].value;
  
   } 
  
/*Function to read and display text input.*/
  
function showInput() {
  var text_entered = document.getElementById("user-input").value;
  document.getElementById('display').innerHTML = text_entered;
}
  
/*Function to read and display textarea input*/
  
 function textareaInput() {
  var message_entered = document.getElementById("text-input").value;
  document.getElementById('display').innerHTML = "message_entered";
}  

/*Function to read and display select input*/
  
  function selectInput() {
    document.selectForm.example.options[0,1,2];
    
}})();

/*Write function to execute the reset button.*/

function myFunction() {
    document.getElementById("inputs").reset();
}