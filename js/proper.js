

//This is how the java script SHOULD look for ideal formatting


// Business/Back-end logic:
var add = function(number1, number2) {
  return number1 + number2;
};
//                                   Addition


var sub = function(number1, number2) {
  return number1 - number2;
};
//                                   Subtraction


var mult = function(number1, number2) {
  return number1 * number2;
};
//                                   Multiplication


var div = function(number1, number2) {
  return number1 / number2;
};

//                                   Division


// User interface/front-end logic:

$(document).ready(function(){
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

});
