//variables
let today = new Date().toString().split(' ').slice(0,4), //day, month, year
    day = `${today[0]}, ${today[2]}`,
    month = today[1],
    year = today[3],
    dateShower = document.querySelector('#date-shower'),
    showDateBtn = document.querySelector('#show-date-btn'),
    showDayBtn = document.querySelector('#show-day-btn'),
    showMonthBtn = document.querySelector('#show-month-btn'),
    showYearBtn = document.querySelector('#show-year-btn');

//events
showDateBtn.addEventListener('click', //show full date
    () => {dateShower.innerHTML = `The current date is: <b>${day} ${month} ${year}</b>`} );
showDayBtn.addEventListener('click', //show day
    () => {dateShower.innerHTML = `Today is: <b>${day}</b>`});
showMonthBtn.addEventListener('click',  //show month
    () => {dateShower.innerHTML = `We are in: <b>${month}</b>`});
showYearBtn.addEventListener('click', //show year
    () => {dateShower.innerHTML = `We are in: <b>${year}</b>`});



