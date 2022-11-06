function petshop(input){
    let numberDogFood = Number (input[0] * 2.5);
    let numberCatFood = Number (input[1] * 4);
    let sum = numberCatFood + numberDogFood;
    console.log(`${sum} lv.`)

}
petshop(["13","9"])