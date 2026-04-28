/*
15)  Mini lista de tarefas
Crie:
 
const tarefas = ["Estudar React", "Fazer exercícios", "Praticar código"]
 
Mostre algo assim:
Minhas tarefas hoje:
1 - Estudar React
2 - Fazer exercícios
3 - Praticar código
*/
import "./App.css"

function App(){
  const tarefas = ["Estudar React", "Fazer exercícios", "Praticar código"]
  return(
    <ol type="1">
      <li>{tarefas[0]}</li>
      <li>{tarefas[1]}</li>
      <li>{tarefas[2]}</li>
    </ol>
  )
}

export default App