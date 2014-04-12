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


    if (input.indexOf("regex") > -1) {
      $("#question1").clone().insertBefore("#placeholder").fadeIn(1000);
    }

    if (input.indexOf("help") > -1) {
      $("#hi").clone().insertBefore("#placeholder").fadeIn(1000);
    }
    if (input.indexOf("help") > -1) {
      $("#hi").clone().toLowerCase().insertBefore("#placeholder").fadeIn(1000);
    }



    $("#console").scrollTop($("#console")[0].scrollHeight);
    $("#command_line").val("");
    });

});

