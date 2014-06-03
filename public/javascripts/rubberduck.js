// JavaScript Document

//
//SETS ALL VARIABLES FOR RubberDucking!
//

$(document).ready(function() {
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
      var quote = $("<blockquote>").text(input);
      $("#placeholder").before(quote);
      $("#regex").clone().insertBefore("#placeholder").fadeIn(1000);
    }

    else if (input.toLowerCase().indexOf("ruby") > -1) {
      var quote = $("<blockquote>").text(input);
      $("#placeholder").before(quote);
      $("#ruby").clone().insertBefore("#placeholder").fadeIn(1000);
    }

    else if (input.toLowerCase().indexOf("rails") > -1) {
      var quote = $("<blockquote>").text(input);
      $("#placeholder").before(quote);
      $("#rails").clone().insertBefore("#placeholder").fadeIn(1000);
    }

    else if (input.toLowerCase().indexOf("jq") > -1) {
      var quote = $("<blockquote>").text(input);
      $("#placeholder").before(quote);
      $("#jquery").clone().insertBefore("#placeholder").fadeIn(1000);
    }

    else if (input != "jargon") {
      var quote = $("<blockquote>").text(input);
      $("#placeholder").before(quote);
      $(randomitem).clone().insertBefore("#placeholder").fadeIn(1000);
    }
    try {
    var msg = new SpeechSynthesisUtterance($(randomitem).text());
    window.speechSynthesis.speak(msg);
    } catch(e) {
      console.log('oh ho')
    }
    $("#console").scrollTop($("#console")[0].scrollHeight);
    $("#command_line").val("");
    });

  // $(randomitem).css("display", "block");
});

