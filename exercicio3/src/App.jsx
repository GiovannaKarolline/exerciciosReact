/*
3) Array de números
Crie:
 
const numeros = [10, 20, 30]
 
Mostre:
Primeiro número: 10
Segundo número: 20
*/
import "./App.css"

function App(){
  const numeros = [10, 20, 30]
  return(
    <>
      <p>Primeiro número: {numeros[0]}</p>
      <p>Segundo número: {numeros[1]}</p>
    </>
  )
}

export default App