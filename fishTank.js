// обем на аквариумa: 85 * 75 * 47 = 299625 см3
// обем в литри: 299625 * 0.001 или  299625 / 1000 => 299.625 литра
// заето пространство: 17% = 0.17
// нужни литри: 299.625 * (1 - 0.17) = 248.68875 литра
function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2])
    let procent = Number(input[3]) / 100
    let volume = length * width * height;
    let liters = volume * 0.001
    let litersTotal = liters - (liters * procent)
    console.log(litersTotal)
}
fishTank(["85","75","47","17"])