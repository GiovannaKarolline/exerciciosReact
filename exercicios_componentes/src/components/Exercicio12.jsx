/*
Calcular idade aproximada
Crie:
anoNascimento = 2000
anoAtual = 2026
Mostre:
Idade aproximada: 26 anos
*/
function Exercicio12(props){
    return(
        <h2>Idade aproximada: {parseInt(props.anoAtual) - parseInt(props.anoNascimento)} anos.</h2>
    )
}

export default Exercicio12