/*
4) Soma de números do array
Crie:
Usando:
 
const numeros = [5, 10, 15]
 
Mostre:
Resultado da soma: 30
*/
import "./App.css"

function App(){
  const numeros = [5, 10, 15]
  return(
    <p>Resultado da soma: {numeros[0] + numeros[1] + numeros[2]}</p>
  )
}

export default App