var form = document.querySelector("#form");

function results(e) {
    const day = document.getElementById("day").value,
    month = document.getElementById("month").value,
    year = document.getElementById("year").value,
    today = new Date(), // gets current date
    thisYear = today.getFullYear(), // gets current year
    thisMonth = today.getMonth() + 1, // gets current month
    thisDay = today.getDate(); // gets current day
   
    e.preventDefault(); // prevents auto submission i.e ? in the url

     // The logic here

    var resultYear = thisYear - year;
    if (month == thisMonth) {
        document.querySelector(".monthResult").outerHTML = 0;
        if (day == thisDay) { 
            var resultDay = thisDay - day;
            document.querySelector(".daysResult").innerHTML = resultDay;
        }
    } else {
        console.log("Month not checked out");
    }
    document.querySelector(".yearResult").innerHTML = resultYear;

    
    
    

}

form.addEventListener("submit", results);
