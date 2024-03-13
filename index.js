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
    beforeRDay0 = beforeRDay + thisDay,
    dayR = document.querySelector(".daysResult"),
    monthR = document.querySelector(".monthResult"),
    yearR = document.querySelector(".yearResult");

    if (year == null && month == null && day == null || year == "" && month == "" && day == "") {
        for (var i = 0; i < 3; i++) {
            document.querySelectorAll(".empty__string__text")[i].style.display = "block";
            document.querySelectorAll("label")[i].classList.add("empty__string-label");
            document.querySelectorAll("input")[i].classList.add("empty__string-input");
        }
        document.querySelector(".invalid__string__year").style.display = "none";
        document.querySelector(".invalid__string__month").style.display = "none";
        document.querySelector(".invalid__string__day").style.display = "none";
        refresh();
    }
    else if (thisYear == year) {
        yearR.dataset.count = 0;
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
            document.querySelector(".invalid__string__month").style.display = "block";
            refresh();
        }
        else if (month == thisMonth) {
            monthR.dataset.count = 0;
            document.querySelector(".invalid__string__whole").style.display = "none";
            if (day > totalDays) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
                refresh();
            }
            else if (day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
                refresh();
            }
            else if (day > thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
                refresh();
            } 
            else if (day < thisDay) {
                dayR.dataset.count = resultDay;
                updateDisplay();
                // console.log(dayR.dataset);
            } else {
                dayR.dataset.count = 0;
                updateDisplay();
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
                dayR.dataset.count = beforeRDay0;
                monthR.dataset.count = (resultMonth) - 1;
                updateDisplay();
           }
           else if (day < thisDay) {
                if (beforeRDay0 >= 30) {
                    dayR.dataset.count = (beforeRDay0) - 30;
                    monthR.dataset.count = (resultMonth) + 1;
                    updateDisplay();
                } else {
                    monthR.dataset.count = (resultMonth) - 1;
                    dayR.dataset.count = beforeRDay0;
                    updateDisplay();
                }
           }
           else {
                monthR.dataset.count = resultMonth;
                dayR.dataset.count = 0;
                updateDisplay();
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
            document.querySelector(".invalid__string__year").style.display = "block";
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
            document.querySelector(".invalid__string__month").style.display = "block";
            refresh();
        }
        else if (month == thisMonth) {
            // monthText = "0";
            if (day > totalDays) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
                refresh();
            }
            else if (day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
                refresh();
            }
            else if (day > thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = (resultYear) - 1;
                monthR.dataset.count = (totalMonths) - 1;
                let resultDayR = day - thisDay;
                if (resultDayR = 1) {
                    dayR.dataset.count = resultDayR + 1;
                }
                else {
                    dayR.dataset.count = resultDayR;
                }
                updateDisplay();
            } 
            else if (day < thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = resultYear;
                monthR.dataset.count = 0;
                dayR.dataset.count = resultDay;
                updateDisplay();
            } else {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = resultYear;
                monthR.dataset.count = 0;
                dayR.dataset.count = 0;
                updateDisplay();
            }
        }
        else if (month < thisMonth) {
            if (day > totalDays) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
                refresh();
            }
            else if (day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
                refresh();
            }
            else if (day > thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = resultYear;
                if (beforeRDay0 >= 30) {
                  monthR.dataset.count = (resultMonth) + 1;  
                  dayR.dataset.count = (beforeRDay0) - 30;
                } else {
                    monthR.dataset.count = (resultMonth) - 1;  
                    dayR.dataset.count = beforeRDay0;
                }
                updateDisplay();
            }
            else if (day < thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = resultYear;
                monthR.dataset.count = resultMonth;
                dayR.dataset.count = resultDay;
                updateDisplay();
            } else {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = resultYear;
                monthR.dataset.count = resultMonth;
                dayR.dataset.count = 0;
                updateDisplay();
            }
        } 
        else {
            if (day > totalDays) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
                refresh();
            }
            else if (day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
                refresh();
            }
            else if (day > thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = (resultYear) - 1;
                monthR.dataset.count = (totalMonths - month) + (thisMonth - 1);
                dayR.dataset.count = beforeRDay0;
                updateDisplay();
            }
            else if (day < thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = (resultYear) - 1;
                monthR.dataset.count = (totalMonths - month) + thisMonth;
                dayR.dataset.count = resultDay;
                updateDisplay();
            } else {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = (resultYear) - 1;
                monthR.dataset.count = (totalMonths - month) + thisMonth;
                dayR.dataset.count = 0;
                updateDisplay();
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
        }
        for (var i = 0; i < 3; i++) {
            document.querySelectorAll("label")[i].classList.add("empty__string-label");
            document.querySelectorAll("input")[i].classList.add("empty__string-input");
            document.querySelectorAll(".empty__string__text")[i].style.display = "none";
        }
        document.querySelector(".invalid__string__year").style.display = "block";
        refresh();
    }

    function updateDisplay(){
        const counters = document.querySelectorAll(".counter");
        counters.forEach(function (counter) {
            let initial_count = -1;
            const final_count = counter.dataset.count;

            const counting = setInterval(updateCounting, 50);

            function updateCounting(){
                initial_count++;
                
                counter.innerText = initial_count; 
                
                if (initial_count == final_count) {
                    clearInterval(counting);
                }
            }
        });
    }
    function refresh() {
        yearR.innerText = "- -";
        monthR.innerText = "- -";
        dayR.innerText = "- -";
    }
}
form.addEventListener("submit", results);