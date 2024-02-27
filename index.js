var submit = document.querySelector(".submit");
var day = document.getElementById("day").value;
var month = document.getElementById("month").value;
var year = document.getElementById("year").value;

submit.addEventListener("click", results);
function results() {
    // for (var i = 0; i < 3; i++) {
    //   document.querySelectorAll("span")[i].textContent = "Fuck!";
    // }
    var today = new Date();
    var thisYear = today.getFullYear();
    var thisMonth = today.getMonth();
    var thisDay = today.getDate();
    document.querySelectorAll("span")[1].textContent = thisDay;
    console.log(thisMonth);
    if (day == thisDay) {
        if (month == thisMonth) {
            if (year == thisYear) {
            console.log("Year,month and day checked out");
            } else {
                console.log("Year not checked out");
            }
        } else {
        console.log("Month not checked out");
        }
    } else {
        console.log("Day not checked out");
    }
    
    

}