function areaOfFigures(input){
    let figure = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    let c = Number(input[3]);

        if (figure === "square") {
        console.log((a*a).toFixed(3));

        } else if (figure === "rectangle"){ 
        console.log((a*b).toFixed(3)); 
        
        } else if (figure === "circle") { 
            let r = Number(input[1]);
            console.log((Math.PI * (r * r)).toFixed(3))

        } else if (figure === "triangle") {
            console.log(((1/2)*a*b).toFixed(3))

        }
}


areaOfFigures(["triangle","4.5","20"])