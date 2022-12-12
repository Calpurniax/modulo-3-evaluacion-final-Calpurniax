import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { getCharacters } from '../services/api';
import CharacterList from './CharacterList';

function App() {
  const [characters, setCharacters] = useState([]);

  //llamada a la API
  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data)

    })
  }, []);

  console.log(characters)
  return (
    <div className='App'>
      <h1>madre mía</h1>
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
