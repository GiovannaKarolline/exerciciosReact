/*
6) Mostrar cidade favorita
   
Crie:
  
const cidades = ["São Paulo", "Rio", "Curitiba"]
 
Mostre:
Minha cidade favorita é Rio
*/
import "./App.css"

function App(){
  const cidades = ["São Paulo", "Rio", "Curitiba"]
  return(
    <p>Minha cidade favorita é {cidades[1]}.</p>
  )
}

export default App