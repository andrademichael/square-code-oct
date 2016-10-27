//frontend

$(document).ready(function() {
  //form submission
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    //input should be integer only
    var year = parseInt($("#year").val());
    //result will be a boolean
    var result = leapYear(year);
    $("#result").text(result);
  });
});

//backend

var leapYear = function(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
};
