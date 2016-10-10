(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(result) {
  var output = [];


  for (var i = 1; i <= result; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){

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

},{"./../js/pingpong.js":1}]},{},[2]);
