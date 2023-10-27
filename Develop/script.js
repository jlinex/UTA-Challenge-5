$(document).ready(function () {
  // displays current date on header of page
  var displayDay = document.querySelector("#currentDay");
  var currentDay = dayjs().format("dddd, MMMM D, YYYY");
  displayDay.textContent = currentDay;

  // gets current hour
  var currentHour = dayjs().hour

  // compares id to the current hour for time-blocks
  $(".time-block").each(function() {
    var timeBlock = $(this).attr("id").split("-")[1];

    if (currentHour == timeBlock) {
        $(this).addClass("present");
        $(this).children(".description").addClass("present");

      } else if (currentHour < timeBlock) {
        $(this).removeClass("present");
        $(this).addClass("future");

     } else if (currentHour > timeBlock) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
  })
 // saves event to local storage
 $(".saveBtn").on("click", function () {
  const timeBlock = $(this).parent().attr("id");
  const description = $(this).siblings(".description").val();
  localStorage.setItem(timeBlock, description);
  console.log('Event saved to calendar!' + description);
 });

  for (let i = 9; i <= 17; i++) {
    const timeBlock = "#hour-" + i;
    const savedDescription = localStorage.getItem("hour-" + i);
    $(timeBlock + " .description").val(savedDescription);
  }
});