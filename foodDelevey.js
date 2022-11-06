function foodDelivery(input){
    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.40;
    let veganMenu = Number(input[2]) * 8.15;
    let dessert = (chickenMenu + fishMenu + veganMenu) * 0.20;
    let delivery = 2.50;
    let totalSum = chickenMenu + fishMenu + veganMenu + dessert + delivery;
    
    console.log(totalSum);
}
   
foodDelivery(["2","4","3"])