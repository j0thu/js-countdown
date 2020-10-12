const newYear = '1 January 2021';

function countdown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    console.log(newYearsDate - currentDate);
}
//Intitiaal call
countdown();

// setInterval(countdown, 1000);

