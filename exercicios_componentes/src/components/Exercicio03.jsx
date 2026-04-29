/*
Soma de dois números
Crie duas variáveis:
numero1
numero2
Mostre na tela o resultado da soma:
A soma é: 15
*/
function Exercicio03(props){
    let numero1 = parseFloat(props.numero1)
    let numero2 = parseFloat(props.numero2)
    return(
        <h2>A soma é: {numero1 + numero2}</h2>
    )
}

export default Exercicio03