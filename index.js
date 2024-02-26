var submit = document.querySelector(".submit");
var day = document.getElementById('day');
var month = document.getElementById('month');
var year = document.getElementById('year');

submit.addEventListener("click", results);
function results() {
    // for (var i = 0; i < 3; i++) {
    //   document.querySelectorAll("span")[i].textContent = "Fuck!";
    // }
    var today = new Date();
    var thisYear = today.getFullYear();
    var thisMonth = today.getMonth;
    var thisDay = today.getDate;
    // document.querySelectorAll("span")[0].textContent = thisYear;
    if (day == thisDay) {
        console.log("Day checked out");
    } else {
        console.log("Day not checked out");
    }
    if (month == thisMonth) {
        console.log("Month checked out");
    } else {
        console.log("Month not checked out");
    }
    if (year == thisYear) {
        console.log("Year checked out");
    } else {
        console.log("Year not checked out");
    }

}