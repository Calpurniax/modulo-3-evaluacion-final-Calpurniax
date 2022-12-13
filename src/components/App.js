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
  const [searchBySpecies, setSearchBySpecies] = useState('');


  //llamada a la API
  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data)
    })
  }, []);

  //reciben los input de búsqueda y lo guardan
  const handleSearch = (value) => {
    setSeachByName(value)
  }
  const handleSpecie = (value) => {
    setSearchBySpecies(value)
  }

  //filtrar el array según los input
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
    .filter((character) => {
      return searchBySpecies === 'all' ? true : character.species === (searchBySpecies)

    })

  //crear el array de species
  const getSpecies = () => {
    const ArrayofSpecies = characters.map(each => each.species)
    const filterSpecies = ArrayofSpecies
      .sort()
      .filter((each, index) => {
        return ArrayofSpecies.indexOf(each) === index;

      })
    return filterSpecies

  }

  return (
    <div className='App'>
      <h1>Personajes de Rick & Morty</h1>
      <Routes>
        <Route path='/' element={
          <>
            <Filters handleSearch={handleSearch} searchByName={searchByName} species={getSpecies()} handleSpecie={handleSpecie} />
            {filteredCharacters.length > 0 ? <CharacterList characters={filteredCharacters} /> : <p>No hay resultados para tu búsqueda</p>}
          </>
        } />
        <Route path='/CharacterDetail/:id' element={<CharacterDetail characters={filteredCharacters} />} />
      </Routes>
    </div>
  );
}

export default App;
