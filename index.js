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

    var resultYear = thisYear - year,
    resultDay = thisDay - day,
    totalDays = new Date(year, month, 0).getDate(),
    totalMonths = 12,
    totalDaysPM = new Date(year, (month - 1), 0).getDate(); // gets total days in previous month

    if (thisYear == year) {
        // let resultYear = 0;
        if (month == thisMonth) {
            document.querySelector(".monthResult").outerHTML = "0";
            if (day > totalDays) {
                alert('Please select a day in the month'); // returns error message
            }
            else if (day > thisDay) {
                document.querySelector(".daysResult").outerHTML = 0; // Replace with error message
            } 
            else if (day < thisDay) {
                document.querySelector(".daysResult").outerHTML = resultDay;
                document.querySelector(".yearResult").outerHTML = "0";
            } else {
                document.querySelector(".daysResult").outerHTML = "0";
                document.querySelector(".yearResult").outerHTML = "0";
            }
        }
        else if (month < thisMonth) {
           var resultMonth = thisMonth - month;
            if (day > totalDays) {
                alert('Please select a day in the month'); // returns error message and resets previous values
            }
           else if (day > thisDay) {
                var beforeRDay = totalDaysPM - day;
                document.querySelector(".daysResult").outerHTML = beforeRDay + thisDay;
                document.querySelector(".monthResult").outerHTML = resultMonth - 1;
                document.querySelector(".yearResult").outerHTML = "0";
           }
           else if (day < thisDay) {
                var beforeRDay0 = beforeRDay + thisDay;
                if (beforeRDay0 >= 30) {
                    document.querySelector(".daysResult").outerHTML = beforeRDay0 - 30;
                    document.querySelector(".monthResult").outerHTML = resultMonth + 1;
                    document.querySelector(".yearResult").outerHTML = "0";
                } else {
                    document.querySelector(".monthResult").outerHTML = resultMonth;
                    document.querySelector(".daysResult").outerHTML = beforeRDay0;
                    document.querySelector(".yearResult").outerHTML = "0";
                }
           }
           else {
                document.querySelector(".yearResult").outerHTML = "0";
                document.querySelector(".monthResult").outerHTML = resultMonth;
                document.querySelector(".daysResult").outerHTML = "0";
           }
        }
        else if (month > thisMonth) {
            if (day > totalDays) {
                alert("Please select a valid day"); // returns error message
            }
            alert("Please select a month in the past"); // returns error message
        }

    }
    
    else if (year < thisYear) {
        // if month > totalMonths returns error message
        if (month == thisMonth) {
            // monthText = "0";
            if (day > totalDays) {
                alert('Please select a day in the month'); // returns error message
            }
            else if (day > thisDay) {
                document.querySelector(".yearResult").outerHTML = resultYear - 1;
                document.querySelector(".monthResult").outerHTML = totalMonths - 1;
                document.querySelector(".daysResult").outerHTML = day - thisDay;
            } 
            else if (day < thisDay) {
                document.querySelector(".yearResult").outerHTML = resultYear;
                document.querySelector(".monthResult").outerHTML = "0";
                document.querySelector(".daysResult").outerHTML = resultDay;
            } else {
                document.querySelector(".yearResult").outerHTML = resultYear;
                document.querySelector(".monthResult").outerHTML = "0";
                document.querySelector(".daysResult").outerHTML = "0";
            }
        }
        else if (month < thisMonth) {
            if (day > totalDays) {
                alert('Please select a day in the month'); // returns error message
            }
            else if (day > thisDay) {
                document.querySelector(".yearResult").outerHTML = resultYear;
                document.querySelector(".monthResult").outerHTML = resultMonth - 1;
                document.querySelector(".daysResult").outerHTML = beforeRDay;
            }
        }
    }

}

form.addEventListener("submit", results);
