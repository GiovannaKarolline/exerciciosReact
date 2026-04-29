/*
Mostrar cidade e país
Crie duas variáveis:
cidade
pais
Mostre:
Eu moro em São Paulo - Brasil
*/
function Exercicio04(props){
    let cidade = props.cidade
    let pais = props.pais
    return(
        <h2>Eu moro em {cidade} - {pais}</h2>
    )
}

export default Exercicio04