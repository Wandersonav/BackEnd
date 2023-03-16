const estudantes = ["Wanderson","Millena","Leilane"];
const notas = [10,9,8];

//                0        1        
const sala = [estudantes,notas]


function exibirNomeENota(aluno){
    if(sala[0].includes(aluno)){ //Acessa os estudantes e incluir o parametro aluno

        
        const  [indi , media] = sala; //atribui automaticamente indice 0 para indi e indice 1 para media


        const indice = indi.indexOf(aluno); // entra em estudantes e pega o indice do aluno (Wanderson)

        const mediaDoAluno = media [indice]; // entra em notas e pega o indice o aluno que neste caso e zero.


console.log(`${aluno} teve a media igual a ${mediaDoAluno} `); //Imprimi o resultado: Wanderson teve a media igual a 10


    }else{

        console.log("Aluno não encontrado");
    }

}


exibirNomeENota("Wanderson"); //Define que o parametro aluno será wanderson

// ...

