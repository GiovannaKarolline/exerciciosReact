/*
Mostrar preço de produto
Crie:
produto
preco
Mostre:
Produto: Notebook
Preço: R$ 3500
*/
function Exercicio07(props){
    return(
        <div>
            <h2>Produto: {props.produto}</h2>
            <h2>Preço: R${props.preco}</h2>
        </div>
    )
}

export default Exercicio07