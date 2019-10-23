
  var add = function(number1, number2) {
    return number1 + number2;
  };
$(document).ready(function(){
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = add(number1, number2);
  alert(add(number1, number2));

});
  //For addition//

/*
  var sub = function(number1, number2) {
    return number1 - number2;
  };

  var number1 = parseInt(prompt("Enter a number to substract:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var result = sub(number1, number2);
  alert(result);

  //For subtraction//

  var mult = function(number1, number2) {
    return number1 * number2;
  };

  var number1 = parseInt(prompt("Enter a number to multiply:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var result = mult(number1, number2);
  alert(result);

  //For multiplication//

  var div = function(number1, number2) {
    return number1 / number2;
  };

  var number1 = parseInt(prompt("Enter a number to divide:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var result = div(number1, number2);
  alert(result);

  //For division//
*/
