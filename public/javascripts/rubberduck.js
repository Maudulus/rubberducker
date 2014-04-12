// JavaScript Document

//
//SETS ALL VARIABLES FOR RubberDucking!
//



$(document).ready(function() {
  $("#compass").fadeIn(3000);
  $("#message_begin").fadeIn(3000);
  $("#area_main").fadeIn(3000);
  $("#command_line").fadeIn(3000);
  $("form").submit(function() {
    var input = $("#command_line").val();

var list = $("ul li").toArray();
var elemlength = list.length;
var randomnum = Math.floor(Math.random()*elemlength);
var randomitem = list[randomnum];

    if (input.toLowerCase().indexOf("regex") > -1) {
      $(input).clone().insertBefore("#placeholder").fadeIn(1000);
      // $(randomitem).clone().insertBefore("#placeholder").fadeIn(1000);
    }

    if (input.toLowerCase().indexOf("tim") > -1) {
      $("#helper").clone().insertBefore("#placeholder").fadeIn(1000);
    }


    $("#console").scrollTop($("#console")[0].scrollHeight);
    $("#command_line").val("");
    });



  // $(randomitem).css("display", "block");


});

