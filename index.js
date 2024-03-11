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

    if (year == null && month == null && day == null || year == "" && month == "" && day == "") {
        for (var i = 0; i < 3; i++) {
            document.querySelectorAll(".empty__string__text")[i].style.display = "block";
            document.querySelectorAll("label")[i].classList.add("empty__string-label");
            document.querySelectorAll("input")[i].classList.add("empty__string-input");
        }
    }
    else if (thisYear == year) {
        for (var i = 0; i < 3; i++) {
            document.querySelectorAll(".empty__string__text")[i].style.display = "none";
            document.querySelectorAll("label")[i].classList.remove("empty__string-label");
            document.querySelectorAll("input")[i].classList.remove("empty__string-input");
        }
        document.querySelector(".invalid__string__day").style.display = "none";
        document.querySelector(".invalid__string__month").style.display = "none";
        document.querySelector(".invalid__string__year").style.display = "none";
        // let resultYear = 0;
        if (month > totalMonths || month <= 0) {
            if (day > totalDays) {
                document.querySelector(".invalid__string__whole").style.display = "block";
            }
            else if (day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
            }
            for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
            }
            document.querySelector(".invalid__string__whole").style.display = "block";
        }
        else if (month == thisMonth) {
            document.querySelector(".monthResult").textContent = "0";
            document.querySelector(".invalid__string__whole").style.display = "none";
            if (day > totalDays) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
            }
            else if (day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
            }
            else if (day > thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
            } 
            else if (day < thisDay) {
                const dayR = document.querySelector(".daysResult");
                dayR.dataset.count = resultDay;
                updateDisplay();
                document.querySelector(".yearResult").textContent = "0";
            } else {
                document.querySelector(".daysResult").textContent = "0";
                document.querySelector(".yearResult").textContent = "0";
            }
        }
        else if (month < thisMonth) {
            document.querySelector(".invalid__string__whole").style.display = "none";
            if (day > totalDays) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
            }
            else if (day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
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
                document.querySelector(".invalid__string__whole").style.display = "block";
            }
            else if (day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
            }
            for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
            }
            document.querySelector(".invalid__string__whole").style.display = "block";
        }

    }
    
    else if (year < thisYear) {
        for (var i = 0; i < 3; i++) {
            document.querySelectorAll(".empty__string__text")[i].style.display = "none";
            document.querySelectorAll("label")[i].classList.remove("empty__string-label");
            document.querySelectorAll("input")[i].classList.remove("empty__string-input");
        }
        document.querySelector(".invalid__string__day").style.display = "none";
        document.querySelector(".invalid__string__month").style.display = "none";
        document.querySelector(".invalid__string__year").style.display = "none";
        // if month > totalMonths returns error message
        if (month > totalMonths || month <= 0) {
            if (day > totalDays) {
                document.querySelector(".invalid__string__whole").style.display = "block";
            }
            else if (day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
            }
            for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
            }
            document.querySelector(".invalid__string__whole").style.display = "block";
        }
        else if (month == thisMonth) {
            // monthText = "0";
            if (day > totalDays) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
            }
            else if (day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
            }
            else if (day > thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
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
                document.querySelector(".invalid__string__whole").style.display = "none";
                document.querySelector(".yearResult").textContent = resultYear;
                document.querySelector(".monthResult").textContent = "0";
                document.querySelector(".daysResult").textContent = resultDay;
            } else {
                document.querySelector(".invalid__string__whole").style.display = "none";
                document.querySelector(".yearResult").textContent = resultYear;
                document.querySelector(".monthResult").textContent = "0";
                document.querySelector(".daysResult").textContent = "0";
            }
        }
        else if (month < thisMonth) {
            if (day > totalDays) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
            }
            else if (day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
            }
            else if (day > thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
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
                document.querySelector(".invalid__string__whole").style.display = "none";
                document.querySelector(".yearResult").textContent = resultYear;
                document.querySelector(".monthResult").textContent = resultMonth;
                document.querySelector(".daysResult").textContent = resultDay;
            } else {
                document.querySelector(".invalid__string__whole").style.display = "none";
                document.querySelector(".yearResult").textContent = resultYear;
                document.querySelector(".monthResult").textContent = resultMonth;
                document.querySelector(".daysResult").textContent = "0";
            }
        } 
        else {
            if (day > totalDays) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
            }
            else if (day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
            }
            else if (day > thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
                document.querySelector(".yearResult").textContent = (resultYear) - 1;
                document.querySelector(".monthResult").textContent = (totalMonths - month) + (thisMonth - 1);
                document.querySelector(".daysResult").textContent = beforeRDay0;
            }
            else if (day < thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
                document.querySelector(".yearResult").textContent = (resultYear) - 1;
                document.querySelector(".monthResult").textContent = (totalMonths - month) + thisMonth;
                document.querySelector(".daysResult").textContent = resultDay;
            } else {
                document.querySelector(".invalid__string__whole").style.display = "none";
                document.querySelector(".yearResult").textContent = (resultYear) - 1;
                document.querySelector(".monthResult").textContent = (totalMonths - month) + thisMonth;
                document.querySelector(".daysResult").textContent = "0";
            }
        }
    } 
    
    else if (year > thisYear){
        if (month > totalMonths || month <= 0) {
            if (day > totalDays) {
                document.querySelector(".invalid__string__day").style.display = "block";
            }
            else if (day <= 0) {
                document.querySelector(".invalid__string__day").style.display = "block";
            }
            document.querySelector(".invalid__string__month").style.display = "block";
            for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
            }
        }
        document.querySelector(".invalid__string__year").style.display = "block";
    }

    function updateDisplay(){
        const counters = document.querySelectorAll(".counter");
        counters.forEach(function (counter) {
            let initial_count = 0;
            const final_count = counter.dataset.count;

            const counting = setInterval(updateCounting, 1);

            function updateCounting(){
                initial_count++;
                counter.innerText = initial_count;
            }

            if (initial_count >= final_count) {
                clearInterval(counting);
            }
        });
    }
    
}

//stopped at setting the animation if same month and year but older day

form.addEventListener("submit", results);