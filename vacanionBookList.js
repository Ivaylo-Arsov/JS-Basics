function vacantion(input){
    let numberOfPages = Number(input[0]);
    let pages = Number(input[1]);
    let days = Number(input[2]);
    let totalReading = numberOfPages / pages;
    let numberOfHours = totalReading / days;
    console.log(numberOfHours);

} 
vacantion(["212","20","2"])
//Общо време за четене на книгата: 212 страници / 20 страници за час = 10.6 часа общо
//Необходимите часове на ден: 10.6 часа / 2 дни = 5.3 часа на ден
