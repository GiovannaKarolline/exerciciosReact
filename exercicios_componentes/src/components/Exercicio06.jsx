/*
Mostrar informações de uma pessoa
Crie variáveis:
nome
idade
profissao
Mostre:
Nome: Maria
Idade: 30
Profissão: Designer
*/
function Exercicio06(props){
    let nome = props.nome
    let idade = props.idade
    let profissao = props.profissao
    return(
        <div>
            <h2>Informações de uma pessoa</h2>
            <ul>
                <li>Nome: {nome}</li>
                <li>Idade: {idade}</li>
                <li>Profissão: {profissao}</li>
            </ul>
        </div>
    )
}

export default Exercicio06