
$(function () {
  $(".saveBtn").on("click", function () {
    var key = $(this).parent().attr("id")
    var textValue = $(this).siblings(".description").val()
    localStorage.setItem(key, textValue)
  })
  $("#08 .description").val(localStorage.getItem("08"))
  $("#09 .description").val(localStorage.getItem("09"))
  $("#10 .description").val(localStorage.getItem("10"))
  $("#11 .description").val(localStorage.getItem("11"))
  $("#12 .description").val(localStorage.getItem("12"))
  $("#13 .description").val(localStorage.getItem("13"))
  $("#14 .description").val(localStorage.getItem("14"))
  $("#15 .description").val(localStorage.getItem("15"))
  $("#16 .description").val(localStorage.getItem("16"))
  $("#17 .description").val(localStorage.getItem("17"))
  $("#18 .description").val(localStorage.getItem("18"))


  document.getElementById("CurrentDate").innerHTML = dayjs().format("MMMM D, YYYY")
});
