
var Calculator = require('./../js/pingpong.js').calculatorModule;

var add = function(number1, number2) {
	var result = number1 + number2;
};

var subtract = function(number1, number2) {
	var result = number1 - number2;
};

var multiply = function(number1, number2) {
	var result = number1 * number2;
};

var divide = function(number1, number2) {
	var result = number1 / number2;
};

$(document).ready(function() {
  $('form#calculator').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add"){
      $("#answer").text(add(number1, number2));
      $("#output").show();
    } else if (operator === "subract") {
      $("#answer").text(subtract(number1, number2));
      $("#output").show();
    } else if (operator === "multiply"){
      $("#answer").text(multiply(number1, number2));
      $("#output").show();
    } else {
      $("#answer").text(divide(number1, number2));
      $("#output").show();
    }
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(result);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
