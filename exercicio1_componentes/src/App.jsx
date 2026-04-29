/*
1. Componente Titulo
Crie um componente Titulo que receba uma prop texto e exiba dentro de um <h1>.
*/
import Titulo from "./components/Titulo/Titulo.jsx"
import "./App.css"

function App() {
  return (
    <Titulo texto="Componente de Título usando ReactJS" />
  )
}

export default App