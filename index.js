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
        totalDaysPM = new Date(year, (month - 1), 0).getDate(), // gets total days in previous month

            // displays results

        yearText = document.querySelector(".yearResult").outerHTML,
        monthText = document.querySelector(".monthResult").outerHTML,
        dayText = document.querySelector(".daysResult").outerHTML; 

    // if (month == thisMonth && day == thisDay && year < thisYear) {
    //     if (day > totalDays) {
    //         alert('Please select a day in the month'); // returns error message
    //     }
    //     monthText = "0";
    //     dayText = "0";
    //     yearText = resultYear;
    // }

    if (thisYear == year) {
        // let resultYear = 0;
        if (month == thisMonth) {
            monthText = "0";
            if (day > totalDays) {
                alert('Please select a day in the month'); // returns error message
            }
            else if (day > thisDay) {
                dayText = 0; // Replace with error message
            } 
            else if (day < thisDay) {
                dayText = resultDay;
                yearText = "0";
            } else {
                dayText = "0";
                yearText = "0";
            }
        }
        else if (month < thisMonth) {
           var resultMonth = thisMonth - month;
            if (day > totalDays) {
                alert('Please select a day in the month'); // returns error message and resets previous values
            }
           else if (day > thisDay) {
                var beforeRDay = totalDaysPM - day;
                dayText = beforeRDay + thisDay;
                monthText = resultMonth - 1;
                yearText = "0";
           }
           else if (day < thisDay) {
                var beforeRDay0 = beforeRDay + thisDay;
                if (beforeRDay0 >= 30) {
                    dayText = beforeRDay0 - 30;
                    monthText = resultMonth + 1;
                    yearText = "0";
                } else {
                    monthText = resultMonth;
                    dayText = beforeRDay0;
                    yearText = "0";
                }
           }
           else {
                yearText = "0";
                monthText = resultMonth;
                dayText = "0";
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
                yearText = resultYear - 1;
                monthText = totalMonths - 1;
                dayText = day - thisDay;
            } 
            else if (day < thisDay) {
                yearText = resultYear;
                monthText = "0";
                dayText = resultDay;
            } else {
                yearText = resultYear;
                monthText = "0";
                dayText = "0";
            }
        }
        else if (month < thisMonth) {
            if (day > totalDays) {
                alert('Please select a day in the month'); // returns error message
            }
            else if (day > thisDay) {
                yearText = resultYear;
                monthText = resultMonth - 1;
                dayText = beforeRDay;
            }
        }
    }

}

form.addEventListener("submit", results);
