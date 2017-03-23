$(document).ready(function() {
    $("#info-form").submit(function(event) {
      event.preventDefault();
      var range = $("#range").val();
      var magic = $("#magic").val();
      var jewelry = $("#jewelry").val();

      var ran = Math.random()

      if (ran < .3) {
        alert("gandalf")
      } else if (ran > .3 && ran < .6) {
        alert("frodo")
      } else if (ran > .6) {
        alert("legolas")
      }
    });
  });
