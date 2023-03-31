const notas = [7, 8, 5, 1];

let somaDasNotas = 0;

notas.forEach (function (nota, /*indice*/){  //callback

    //console.log(indice);
    somaDasNotas+= nota;
})

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`)
