var end = new Date("August 6, 2023 10:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var diff = end - now;

  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    days + " days " + hours + " hrs " + minutes + " min " + seconds + " sec ";
}, 1000);
