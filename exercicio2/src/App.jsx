/*
2) Mostrar duas frutas
 
Usando o mesmo array, mostre:
Eu gosto de Banana e Uva
*/
import "./App.css"

function App(){
  const frutas = ["Maçã","Banana","Uva"];
  return(
    <p>Eu gosto de {frutas[1]} e {frutas[2]}.</p>
  )
}

export default App