function greeing(input){
    let squareMeters = input[0] * 7.61;
    let discount = squareMeters * 0.18;
    let finalSum = squareMeters - discount;
    console.log(`The final price is: ${finalSum} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}
greeing(["150"])