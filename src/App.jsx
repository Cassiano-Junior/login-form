import Main from "./components/Main";
import { GlobalStyle } from "./styles/global";
import SidePicture from "./components/SidePicture";



function App() {
  return (
    <div style={{display: 'flex', width: '100%', height: '100%'}}>
      <Main />
      <SidePicture />
      <GlobalStyle />
    </div>
  )
}

export default App;
