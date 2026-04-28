/*
9) Array de idades
Crie:
const idades = [18, 21, 30]
 
Mostre:
A soma das duas primeiras idades é: 39
*/
import "./App.css"

function App(){
  const idades = [18, 21, 30]
  return(
    <p>A soma das duas primeiras idades é: {idades[0] + idades[1]}</p>
  )
}

export default App