/*
11)  Array de comidas
  
Crie:
const comidas = ["Pizza", "Hambúrguer", "Sushi"]
 
Mostre:
Hoje eu quero comer Pizza
*/
import "./App.css"

function App(){
  const comidas = ["Pizza", "Hambúrguer", "Sushi"]
  return(
    <p>Hoje eu quero comer {comidas[0]}.</p>
  )
}

export default App