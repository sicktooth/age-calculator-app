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
    resultMonth = thisMonth - month,
    resultDay = thisDay - day,
    totalDays = new Date(year, month, 0).getDate(),
    totalMonths = 12,
    totalDaysPM = new Date(thisYear, (thisMonth - 1), 0).getDate(), // gets total days in previous month
    beforeRDay = totalDaysPM - day,
    beforeRDay0 = beforeRDay + thisDay;

    if (thisYear == year) {
        // let resultYear = 0;
        if (month > totalMonths || month <= 0) {
            if (day > totalDays) {
                alert('Please select a day in the month'); // returns error message
            }
            else if (day <= 0) {
                alert('Please select a valid day in the month'); // returns error message
            }
            alert('Please select a valid month'); // returns error message
        }
        else if (month == thisMonth) {
            document.querySelector(".monthResult").textContent = "0";
            if (day > totalDays) {
                alert('Please select a day in the month'); // returns error message
            }
            else if (day <= 0) {
                alert('Please select a valid day in the month'); // returns error message
            }
            else if (day > thisDay) {
                document.querySelector(".daysResult").textContent = 0; // Replace with error message
            } 
            else if (day < thisDay) {
                document.querySelector(".daysResult").textContent = resultDay;
                document.querySelector(".yearResult").textContent = "0";
            } else {
                document.querySelector(".daysResult").textContent = "0";
                document.querySelector(".yearResult").textContent = "0";
            }
        }
        else if (month < thisMonth) {
            if (day > totalDays) {
                alert('Please select a day in the month'); // returns error message and resets previous values
            }
            else if (day <= 0) {
                alert('Please select a valid day in the month'); // returns error message
            }
           else if (day > thisDay) {
                document.querySelector(".daysResult").textContent = beforeRDay0;
                document.querySelector(".monthResult").textContent = (resultMonth) - 1;
                document.querySelector(".yearResult").textContent = "0";
           }
           else if (day < thisDay) {
                if (beforeRDay0 >= 30) {
                    document.querySelector(".daysResult").textContent = (beforeRDay0) - 30;
                    document.querySelector(".monthResult").textContent = (resultMonth) + 1;
                    document.querySelector(".yearResult").textContent = "0";
                } else {
                    document.querySelector(".monthResult").textContent = (resultMonth) - 1;
                    document.querySelector(".daysResult").textContent = beforeRDay0;
                    document.querySelector(".yearResult").textContent = "0";
                }
           }
           else {
                document.querySelector(".yearResult").textContent = "0";
                document.querySelector(".monthResult").textContent = resultMonth;
                document.querySelector(".daysResult").textContent = "0";
           }
        }
        else {
            if (day > totalDays) {
                alert("Please select a valid day"); // returns error message
            }
            else if (day <= 0) {
                alert('Please select a valid day in the month'); // returns error message
            }
            alert("Please select a month in the past"); // returns error message
        }

    }
    
    else if (year < thisYear) {
        // if month > totalMonths returns error message
        if (month > totalMonths || month <= 0) {
            if (day > totalDays) {
                alert('Please select a day in the month'); // returns error message
            }
            else if (day <= 0) {
                alert('Please select a valid day in the month'); // returns error message
            }
            alert('Please select a valid month'); // returns error message
        }
        else if (month == thisMonth) {
            // monthText = "0";
            if (day > totalDays) {
                alert('Please select a day in the month'); // returns error message
            }
            else if (day <= 0) {
                alert('Please select a valid day in the month'); // returns error message
            }
            else if (day > thisDay) {
                document.querySelector(".yearResult").textContent = (resultYear) - 1;
                document.querySelector(".monthResult").textContent = (totalMonths) - 1;
                let resultDayR = day - thisDay;
                if (resultDayR = 1) {
                    document.querySelector(".daysResult").textContent = resultDayR + 1;
                }
                else {
                    document.querySelector(".daysResult").textContent = resultDayR;
                }
            } 
            else if (day < thisDay) {
                document.querySelector(".yearResult").textContent = resultYear;
                document.querySelector(".monthResult").textContent = "0";
                document.querySelector(".daysResult").textContent = resultDay;
            } else {
                document.querySelector(".yearResult").textContent = resultYear;
                document.querySelector(".monthResult").textContent = "0";
                document.querySelector(".daysResult").textContent = "0";
            }
        }
        else if (month < thisMonth) {
            if (day > totalDays) {
                alert('Please select a day in the month'); // returns error message
            }
            else if (day <= 0) {
                alert('Please select a valid day in the month'); // returns error message
            }
            else if (day > thisDay) {
                document.querySelector(".yearResult").textContent = resultYear;
                if (beforeRDay0 >= 30) {
                  document.querySelector(".monthResult").textContent = (resultMonth) + 1;  
                  document.querySelector(".daysResult").textContent = (beforeRDay0) - 30;
                } else {
                    document.querySelector(".monthResult").textContent = (resultMonth) - 1;  
                    document.querySelector(".daysResult").textContent = beforeRDay0;
                }
            }
            else if (day < thisDay) {
                document.querySelector(".yearResult").textContent = resultYear;
                document.querySelector(".monthResult").textContent = resultMonth;
                document.querySelector(".daysResult").textContent = resultDay;
            } else {
                document.querySelector(".yearResult").textContent = resultYear;
                document.querySelector(".monthResult").textContent = resultMonth;
                document.querySelector(".daysResult").textContent = "0";
            }
        } 
        else {
            if (day > totalDays) {
                alert('Please select a day in the month'); // returns error message
            }
            else if (day <= 0) {
                alert('Please select a valid day in the month'); // returns error message
            }
            else if (day > thisDay) {
                document.querySelector(".yearResult").textContent = (resultYear) - 1;
                document.querySelector(".monthResult").textContent = (totalMonths - month) + (thisMonth - 1);
                document.querySelector(".daysResult").textContent = beforeRDay0;
            }
            else if (day < thisDay) {
                document.querySelector(".yearResult").textContent = (resultYear) - 1;
                document.querySelector(".monthResult").textContent = (totalMonths - month) + thisMonth;
                document.querySelector(".daysResult").textContent = resultDay;
            } else {
                document.querySelector(".yearResult").textContent = (resultYear) - 1;
                document.querySelector(".monthResult").textContent = (totalMonths - month) + thisMonth;
                document.querySelector(".daysResult").textContent = "0";
            }
        }
    } 
    
    else {
        if (month > totalMonths || month <= 0) {
            if (day > totalDays) {
                alert('Please select a day in the month'); // returns error message
            }
            else if (day <= 0) {
                alert('Please select a valid day in the month'); // returns error message
            }
            alert('Please select a valid month'); // returns error message
        }
        alert ("Input a year in the past!!!!!");
    }

}

form.addEventListener("submit", results);