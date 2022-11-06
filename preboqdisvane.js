function painting(input){
let nylonSafety = Number(input[0]) * 1.50;
let extraNylon = + 3 ;
let paint = Number(input[1] * 14.50);
let extraPaint = (paint * 0.1);
let paintThinner = Number(input[2]) * 5;
let bags = + 0.40;
let totalSumMaterials = nylonSafety + paint + paintThinner + bags + extraPaint + extraNylon;
let hours = Number(input[3]);
let craftsmansPay = hours * (totalSumMaterials * 0.3)
let totalSum = craftsmansPay + totalSumMaterials

console.log(totalSumMaterials);
}
painting(["10","11","4","8"])