function soma (numero1, numero2){
    return numero1 + numero2

}

                        //parâmetros
function multiplicacao (numero1,numero2){
            //retorno do parâmetro
    return numero1 * numero2
}

//Função de soma dentro da função de multiplicação

                                //  5    *   9
console.log (multiplicacao (soma(2, 3), (4,5)))


function nomeSobrenome (nome, sobrenome){

    return  nome + sobrenome




}


console.log(nomeSobrenome( 'wanderson ','alves'));


function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')