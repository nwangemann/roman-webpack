import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toRoman } from './roman-numeral.js';


// user interface logic gathers input info
$(document).ready(function(){
  $(".numberToRoman").submit(function(event){
    event.preventDefault();
    var numberInput = $("#input").val();
    var romanNumber = toRoman(numberInput);
    // create a var that take result of numberInput look for toRoman in function
    $("#result").text(romanNumber);
  });

  // $(".romanToNumber").submit(function(event){
  //   event.preventDefault();
  //   var romanInput = $("#inputTwo").val();
  //   var numberRoman = fromRoman(romanInput)
  //   // create a var that take result of numberInput look for toRoman in function
  //   $("#result2").text(numberRoman)
  // });
});
