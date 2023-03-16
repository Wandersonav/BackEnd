const notas = [7, 8, 5, 1]

let somaDasNotas = 0;

for (i = 0; i < notas.length; i++){

somaDasNotas += notas[i];

}

let media = somaDasNotas / notas.length;

console.log(somaDasNotas)
console.log(media)