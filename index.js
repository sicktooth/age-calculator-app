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
    if (month == thisMonth && day == thisDay) {
        document.querySelector(".monthResult").outerHTML = 0;
        var resultDay = thisDay - day;
        document.querySelector(".daysResult").outerHTML = resultDay;
    } else {
        console.error("Month not checked out");
    }
    document.querySelector(".yearResult").outerHTML = resultYear;

    if (thisYear == year) {
        resultYear = 0;
        document.querySelector(".yearResult").outerHTML = resultYear;
        if (month == thisMonth) {
            document.querySelector(".monthResult").outerHTML = 0;
            if (day > thisDay) {
                document.querySelector(".dayResult").outerHTML = 0;
            } 
            else if (day < thisDay) {
                document.querySelector(".dayResult").outerHTML = thisDay-day;
            } else {
                document.querySelector(".dayResult").outerHTML = 0;
            }
        } else if (month < thisMonth) {
           var beforeRMonth = thisMonth - month;
           
        }
    }
    
    

}

form.addEventListener("submit", results);
