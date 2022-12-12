import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { getCharacters } from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import { Routes, Route } from "react-router-dom";
import CharacterDetail from './CharacterDetail';

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
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1
      } else if (nameA > nameB) {
        return 1
      } else {
        return 0
      }
    })
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
      <Routes>
        <Route path='/' element={
          <>
            <Filters handleSearch={handleSearch} searchByName={searchByName} />
            {filteredCharacters.length > 0 ? <CharacterList characters={filteredCharacters} /> : <p>No hay resultados para tu búsqueda</p>}
          </>
        } />
        <Route path='/CharacterDetail/:id' element={<CharacterDetail characters={filteredCharacters} />} />
      </Routes>
    </div>
  );
}

export default App;
