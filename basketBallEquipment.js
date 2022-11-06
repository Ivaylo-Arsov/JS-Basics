// ⦁	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// ⦁	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// ⦁	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// ⦁	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

function basketBall(input){
    let basketBallAnual = Number(input[0]);
    let sneakers = basketBallAnual - (basketBallAnual * 0.40);
    let equipment = sneakers - (sneakers * 0.20);
    let basketB = equipment * 0.25;
    let accesoars = basketB * 0.20;
    let totalSum = basketBallAnual + sneakers + equipment + basketB + accesoars;
    console.log(totalSum);
}
basketBall(["365"])