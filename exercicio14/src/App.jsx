/*
14) Soma de três números do array
Crie:
 
const valores = [2, 4, 6]
 
Mostre:
Resultado: 12
*/
import "./App.css"

function App(){
    const valores = [2, 4, 6]
    return(
        <p>Resultado: {valores[0] + valores[1] + valores[2]}</p>
    )
}

export default App