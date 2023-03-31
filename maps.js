const notas = [10, 8, 7, 6, 9];

const notasAtualizadas = notas.map((nota) => {

return nota + 1 >= 10 ? 10 : nota + 1; // função ternárioa ( se nota for maior que 10 então será = 10 senão será nota + 1)

})  

console.log(notas)
console.log(notasAtualizadas)