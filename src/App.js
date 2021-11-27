import './App.css';
import CharacterList from './pages/CharactersList';
import {Header} from './components/common';

function App() {
return (
  <div>
    <div>
      <Header />
    </div>

    <div className="row">
        <div className="col-log-4 App">
          <CharacterList />
        </div>

        <div className="col-log-8">

        </div>
    </div>
  </div>
);
}

export default App;