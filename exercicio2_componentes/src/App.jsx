/*
2. Componente Paragrafo
Crie um componente Paragrafo que receba uma prop conteudo e exiba em um <p>.
*/
import "./App.css"
import Paragrafo from "./components/Paragrafo/Paragrafo.jsx"

function App(){
  return(
    <Paragrafo conteudo="Componente de parágrafo que recebe seu conteúdo usando um parâmetro."/>
  )
}

export default App