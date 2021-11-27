
import './App.css';
import './components/common/header/Header.css'
import CharacterList from './pages/CharactersList';
import {Header} from './components/common'

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      
      <div className="App">


      <CharacterList />

    </div>
    </div>
  );
}

export default App;
