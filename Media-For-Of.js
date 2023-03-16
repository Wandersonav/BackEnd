const notas = [7, 8, 5, 1]
let somaDasNotas = 0;
 
for (let nota of notas){  //percorre toda a estruta de notas 

somaDasNotas += nota;  

}

let media = somaDasNotas/notas.length

console.log(media)