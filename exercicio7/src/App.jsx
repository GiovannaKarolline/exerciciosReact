/*
7) Array de preços
Crie:
 
const precos = [10, 25, 40]
 
Mostre:
Preço do produto 1: R$10
Preço do produto 2: R$25
*/

import "./App.css"

function App(){
  const precos = [10, 25, 40]
  return(
    <>
      <p>Preço do produto 1: R${precos[0]}</p>
      <p>Preço do produto 2: R${precos[1]}</p>
    </>
  )
}

export default App