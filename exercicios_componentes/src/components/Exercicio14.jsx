/*
Mostrar temperatura
Crie:
temperatura = 28
cidade = "Rio de Janeiro"
Mostre:
A temperatura em Rio de Janeiro é 28°C
*/
function Exercicio14(props){
    return(
        <h2>A temperatura em {props.cidade} é {props.temperatura}°C.</h2>
    )
}

export default Exercicio14