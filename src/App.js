
import './App.css';
import CharacterList from './pages/CharactersList';
import {Header} from './components/common'

function App() {
  return (
    <div>
      <Header />
      
      <div className="col-log-4">Seccion 1</div>
      <div className="col-log-4">Seccion 2</div>
      <div className="col-log-4">Seccion 3</div>
      <div className="App">
      <CharacterList />

      </div>
    </div>
  );
}

export default App;
