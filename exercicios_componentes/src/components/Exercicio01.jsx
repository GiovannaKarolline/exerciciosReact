/*
Mostrar uma variável na tela
Crie uma variável chamada nome e mostre na tela a frase:
Olá, meu nome é João
Substitua João pelo valor da variável.
*/

function Exercicio01(props){
    let nome = props.nome
    return(
        <h2>Olá, meu nome é {nome}!</h2>
    )
}

export default Exercicio01