import "./App.css"
import Exercicio01 from "./components/Exercicio01.jsx"
import Exercicio02 from "./components/Exercicio02.jsx"
import Exercicio03 from "./components/Exercicio03.jsx"
import Exercicio04 from "./components/Exercicio04.jsx"
import Exercicio05 from "./components/Exercicio05.jsx"
import Exercicio06 from "./components/Exercicio06.jsx"
import Exercicio07 from "./components/Exercicio07.jsx"
import Exercicio08 from "./components/Exercicio08.jsx"
import Exercicio09 from "./components/Exercicio09.jsx"
import Exercicio10 from "./components/Exercicio10.jsx"
import Exercicio11 from "./components/Exercicio11.jsx"
import Exercicio12 from "./components/Exercicio12.jsx"
import Exercicio13 from "./components/Exercicio13.jsx"
import Exercicio14 from "./components/Exercicio14.jsx"
import Exercicio15 from "./components/Exercicio15.jsx"

function App() {
  return (
    <main>
      <h1>Exercícios para praticar ReactJS</h1>
      <Exercicio01 nome="Giovanna" />
      <hr />
      <Exercicio02 idade="20" />
      <hr />
      <Exercicio03 numero1="2000" numero2="26" />
      <hr />
      <Exercicio04 cidade="São Paulo" pais="Brasil" />
      <hr />
      <Exercicio05 />
      <hr />
      <Exercicio06 nome="Maria" idade="77" profissao="Engenheira de Software" />
      <hr />
      <Exercicio07 produto="Computador completo" preco="2806,05"/>
      <hr />
      <Exercicio08 />
      <hr />
      <Exercicio09/>
      <hr />
      <Exercicio10 ano="2026"/>
      <hr />
      <Exercicio11 nome="Lucas" curso="React" escola="Flamingo"/>
      <hr />
      <Exercicio12 anoAtual="2026" anoNascimento="2000"/>
      <hr />
      <Exercicio13 numeroFavorito="1"/>
      <hr />
      <Exercicio14 cidade="Rio de Janeiro" temperatura="28"/>
      <hr />
      <Exercicio15 nome="Ana" idade="22" hobby="videogame"/>
      <hr />
    </main>
  )
}

export default App