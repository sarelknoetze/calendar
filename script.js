const isLeapYear = (year) => {
    return(
        (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || 
        (year % 100 === 0 && year % 400 === 0)
    );
};

const getFebDays = (year) => {
    return isLeapYear(year) ? 29 :28;
};
let calendar = document.querySelector(".calendar");
console.log(calendar);
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "may",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let monthPicker = document.querySelector("#monthPicker");
const dayTextFormat = document.querySelector(".dayTextFormat");
const timeFormat = document.querySelector(".timeFormat");
const dateFormat = document.querySelector(".dateFormat");
const generateCalendar = (month, year) => {
    let calendarDays = document.querySelector(".calendarDays");
    calendarDays.innerHTML = "";
    let calendarHeaderYear = document.querySelector("#year");
    let daysOfMonth = [
        31,
        getFebDays(year),
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];
    let currentDate = new Date();
    monthPicker.innerHTML = monthNames[month];
    calendarHeaderYear.innerHTML = year;
    let firstDay = new Date(year, month);

    for(let i = 0; i <= daysOfMonth[month] + firstDay.getDay() -1; i++){
        let day = document.createElement("div");
        day.addEventListener('click', ()=>{
            let formDisplay = document.querySelector('.form');
            formDisplay.style.display = 'block'
            if(day.classList != 'selected'){
                day.classList.add('selected');
                let bookedDay = document.querySelector("#bookedDay");
                bookedDay.innerText = day.innerText + " " + monthPicker.innerText + " " + currentYear.value;
            } else{
                day.classList.remove("selected");
            }
            // day.classList.add("selected");
        })
        let buttonDay = document.createElement("button");
        buttonDay.classList.add('dayButtons');
        buttonDay.id =`day${i}`;
        if(i >= firstDay.getDay()){
            buttonDay.innerHTML = i - firstDay.getDay() + 1;
            if(i - firstDay.getDay() + 1 === currentDate.getDate() && year === currentDate.getFullYear() && month === currentDate.getMonth()){
                day.classList.add("currentDate");
            }
        }
        calendarDays.appendChild(day);
        day.appendChild(buttonDay);
    }
}


// let monthList = document.querySelector(".monthList");
// console.log(monthList);
// monthNames.forEach((e, index) => {
//     let month = document.createElement('div');
//     month.innerHTML = `<div>${e}</div>`;
//     monthList.append(month);
//     month.onclick = () => {
//         currentMonth.value = index;
//         generateCalendar(currentMonth.value, currentYear.value);
//         monthList.classList.replace("show", "hide");
//     };
// });

// (function () {
//     monthList.classList.add("hideonce");
// })();


let currentDate = new Date();
let currentMonth = {value : currentDate.getMonth()};
let currentYear = {value : currentDate.getFullYear()};

generateCalendar(currentMonth.value, currentYear.value);
function preChange(){
    console.log(currentMonth.value);
    if(currentMonth.value  >= 1){
        currentMonth.value--;
        console.log(currentMonth.value);
    } else{
        currentMonth.value += 11;
        currentYear.value--;
    }
    generateCalendar(currentMonth.value, currentYear.value);
};
    
document.querySelector("#nextYear").onclick = () => {
    if(currentMonth.value <= 10 ){
        currentMonth.value +=1;
    } else {
        currentMonth.value -= 11;
        currentYear.value++;
    }
    generateCalendar(currentMonth.value, currentYear.value);
};

// sit als in die sql
// laat hy n sms stuur(kort data)
// sal aangaan
