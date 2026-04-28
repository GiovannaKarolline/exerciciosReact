/*
10) Array de jogos
  
Crie:
const jogos = ["Minecraft", "FIFA", "GTA"]
 
Mostre:
Meu jogo favorito é GTA
*/
import "./App.css"

function App(){
  const jogos = ["Minecraft", "FIFA", "GTA"]
  return(
    <p>Meu jogo favorito é {jogos[2]}</p>
  )
}

export default App