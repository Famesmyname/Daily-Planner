// define all DOM elements to be used
var currentDayEl = $('#currentDay');







// Function display date
function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    currentDayEl.text(rightNow);
  }


 setInterval(displayDate, 1000);