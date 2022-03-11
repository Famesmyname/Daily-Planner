// define all DOM elements to be used
const currentDayEl = $('#currentDay');

//
$(document).ready(function () {
  //Save button functionality saves the task and the hour of the task to local storage.
  $('.saveBtn').on('click', function(){
    let task = $(this).siblings('.task').val();
    let time = $(this).parent().attr('id');
    localStorage.setItem(time, task);
  });

  //Check the current hour and show past, present, future colors
  function currentColor() {
    let currentHour = moment().hours()
    $('.time-block').each(function(){
      let taskHour = $(this).attr('time')
      if (taskHour < currentHour) {
        $(this).addClass('past');
      }
      else if (taskHour == currentHour) {
        $(this).removeClass('past')
        $(this).addClass('present')
      }
      else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
      }
    })
  }

// Function display date
function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    currentDayEl.text(rightNow);
  }

  //Initialize page with current date then populate each task with saved tasked
 function Init() {
   displayDate()
   $('#hour9 .task').val(localStorage.getItem('hour9'));
   $('#hour10 .task').val(localStorage.getItem('hour10'));
   $('#hour11 .task').val(localStorage.getItem('hour11'));
   $('#hour12 .task').val(localStorage.getItem('hour12'));
   $('#hour13 .task').val(localStorage.getItem('hour13'));
   $('#hour14 .task').val(localStorage.getItem('hour14'));
   $('#hour15 .task').val(localStorage.getItem('hour15'));
   $('#hour16 .task').val(localStorage.getItem('hour16'));
   $('#hour17 .task').val(localStorage.getItem('hour17'));
 }

 Init()
 currentColor()
 setInterval(displayDate, 1000);
})

 