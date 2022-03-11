// define all DOM elements to be used
const currentDayEl = $('#currentDay');

//
$(function(){

  //Save button functionality saves the task and the hour of the task to local storage.
  $('.saveBTn').on('click', function(){
    let task = $(this).siblings('.task').val();
    let time = $(this).parent().attr('id');
    localStorage.setItem(task, time);
  });




// Function display date
function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    currentDayEl.text(rightNow);
  }

 function Init() {
   $('#hour9 .task').val(localStorage.getItem('hour9'));
   $('#hour10 .task').val(localStorage.getItem('hour10'));
   $('#hour11 .task').val(localStorage.getItem('hour11'));
   $('#hour12 .task').val(localStorage.getItem('hour12'));
   $('#hour13 .task').val(localStorage.getItem('hour13'));
   $('#hour14 .task').val(localStorage.getItem('hour14'));
   $('#hour15 .task').val(localStorage.getItem('hour15'));
   $('#hour16 .task').val(localStorage.getItem('hour16'));
   $('#hour17 .task').val(localStorage.getItem('hour17'));
   displayDate()
 }

 Init()

 setInterval(displayDate, 1000);
})

 