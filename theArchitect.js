function theArchitect(input){
    let architect = input[0];
    let projects = Number (input[1]);
    let sum = projects * 3;
    console.log(`The architect ${architect} will need ${sum} hours to complete ${projects} project/s.`);
}
theArchitect(["Ivaylo", 5]);