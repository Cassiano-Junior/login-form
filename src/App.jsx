import Main from "./components/Main";
import { GlobalStyle } from "./styles/global";
import SidePicture from "./components/SidePicture";
import { useEffect } from "react";
import axios from 'axios'



function App() {
  useEffect(() => {
    (async () => {
     const teste = await axios.get('https://rickandmortyapi.com/api/character')
     console.log(teste)
    } )()
  }, [])


  return (
    <div style={{display: 'flex', width: '100%', height: '100%'}}>
      <Main />
      <SidePicture />
      <GlobalStyle />
    </div>
  )
}

export default App;
