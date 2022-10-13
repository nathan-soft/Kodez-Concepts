//instantiate elements...
let lblDays = document.getElementById("days");
let lblHours = document.getElementById("hours"); 
let lblMins = document.getElementById("mins");
let lblSecs = document.getElementById("secs");

// Set the date we're counting down to
var countDownDate = new Date("2022-11-1T00:00:60").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Result is output to the specific element
  lblDays.innerText = days;
  lblHours.innerText = hours; 
  lblMins.innerText = minutes;
  lblSecs.innerText = seconds;
    
  // If the count down is over, write some text 
  if (distance <= 0) {
    clearInterval(x);
    lblDays.textContent = "00";
  lblHours.textContent = "00"; 
  lblMins.textContent = "00";
  lblSecs.textContent = "00";
  }
}, 1000);