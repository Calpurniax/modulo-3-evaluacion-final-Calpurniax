import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { getCharacters } from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchByName, setSeachByName] = useState('');

  //llamada a la API
  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data)

    })
  }, []);

  //recibe el input de búsqueda y lo guarda
  const handleSearch = (value) => {
    setSeachByName(value)
  }

  //filtrar el array según el input de búsqueda
  const filteredCharacters = characters
    .filter((character) => {
      if (searchByName !== '') {
        return character.name.toLowerCase().includes(searchByName)
      } else {
        return true
      }
    })

  console.log(characters)
  return (
    <div className='App'>
      <h1>Personajes de Rick & Morty</h1>
      <Filters handleSearch={handleSearch} />
      <CharacterList characters={filteredCharacters} />
    </div>
  );
}

export default App;
