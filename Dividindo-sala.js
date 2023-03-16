const alunos = ["wanderson","millena","Geodália","Leila","Gabriela","Black","Fabricio","Manu","Evellyn","Fabiana"]

//método slice que significa fatiar, divide o array em dois. 
//const parte1 = alunos.slice(0,5)
const parte1 = alunos.slice(0, alunos.length/2) 

//const parte2 = alunos.slice(5,10)

const parte2 = alunos.slice(alunos.length/2)

console.log(parte2)