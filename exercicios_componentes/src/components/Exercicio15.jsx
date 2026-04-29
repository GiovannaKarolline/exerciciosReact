/*
Criar um mini "perfil"
Crie variáveis:
nome
idade
hobby
Mostre algo assim:
Perfil
Nome: Ana
Idade: 22
Hobby: Jogar videogame
*/
function Exercicio15(props){
    return(
        <div>
            <h2>Perfil</h2>
            <h2>Nome: {props.nome}</h2>
            <h2>Idade: {props.idade}</h2>
            <h2>Hobby: {props.hobby}</h2>
        </div>
    )
}

export default Exercicio15