/*
8) Criar lista de cores
Crie:
const cores = ["Azul", "Vermelho", "Verde"]
 
Mostre:
Minhas cores favoritas são: Azul, Vermelho e Verde
*/
import "./App.css"

function App(){
  const cores = ["Azul", "Vermelho", "Verde"]
  return(
    <p>Minhas cores favoritas são: {cores[0]}, {cores[1]} e {cores[2]}.</p>
  )
}

export default App