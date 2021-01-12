$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });


  $("p#highlight").click(function() {
    $(".change p").removeClass();
    $(".change p").addClass("highlight");
  });
});
