const alunos = ["wanderson","millena","Geodália","Leila","Gabriela","Black","Fabricio","Manu","Evellyn","Fabiana"]

// quero retirar da lista dois nomes: Geodália,Leila, Gabriela e Black


alunos.splice(2,5, "Junior")  // retirei os índices 2 ao 5 e adicionei o Junior no lugar deles -> "Geodália","Leila","Gabriela","Black"

console.log(alunos)