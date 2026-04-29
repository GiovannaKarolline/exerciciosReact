/*
Mostrar frase com 3 variáveis
Crie:
nome
curso
escola
Mostre:
Lucas estuda React na Faculdade Flamingo.
*/
function Exercicio11(props){
    return(
        <h2>{props.nome} estuda {props.curso} na Faculdade {props.escola}.</h2>
    )
}

export default Exercicio11