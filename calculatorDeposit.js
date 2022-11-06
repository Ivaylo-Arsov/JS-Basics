//⦁	Депозирана сума – реално число в интервала [100.00 … 10000.00]
//	Срок на депозита (в месеци) – цяло число в интервала [1…12]
//	Годишен лихвен процент – реално число в интервала [0.00 …100.00]

function deposit(input){
    let depositSum = Number(input[0]);
    let depositLength = Number(input[1]);
    let yearlyProcent = Number(input[2]) / 100;
    let totalSum = depositSum + depositLength *((depositSum * yearlyProcent) / 12);
console.log(totalSum);

}
deposit(["200","3","5.7"])