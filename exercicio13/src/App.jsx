/*
13) Mostrar primeiro e último item
Usando:
 
const linguagens = ["JavaScript", "Python", "Java", "C#"]
 
Mostre:
Primeira linguagem: JavaScript
Última linguagem: C#
*/
import "./App.css"

function App(){
  const linguagens = ["JavaScript", "Python", "Java", "C#"]
  return(
    <>
    <p>Primeira linguagem: {linguagens[0]}</p>
    <p>Última linguagem: {linguagens[(linguagens.length)-1]}</p>
    </>
  )
}

export default App