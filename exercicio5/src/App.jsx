/*
5) Array de nomes
Crie:
const nomes = ["Ana", "Carlos", "João"]
 
Mostre:
Aluno 1: Ana
Aluno 2: Carlos
Aluno 3: João
*/
import "./App.css"

function App(){
  const nomes = ["Ana","Carlos","João"]
  return(
    <>
      <p>Aluno 1: {nomes[0]}</p>
      <p>Aluno 2: {nomes[1]}</p>
      <p>Aluno 3: {nomes[2]}</p>
    </>
  )
}

export default App