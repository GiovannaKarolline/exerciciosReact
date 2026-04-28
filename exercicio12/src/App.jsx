/*
12) Mostrar tamanho do array
Crie:
 
const filmes = ["Matrix", "Batman", "Avatar", "Interestelar"]
 
Mostre:
Quantidade de filmes: 4
 
Use .length.
*/
import "./App.css"

function App(){
  const filmes = ["Matrix", "Batman", "Avatar", "Interestelar"]
  return(
    <p>Quantidade de filmes: {filmes.length}</p>
  )
}

export default App