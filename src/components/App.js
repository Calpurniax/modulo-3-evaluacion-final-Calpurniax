import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { getCharacters } from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import { Routes, Route } from "react-router-dom";
import CharacterDetail from './CharacterDetail';
import Header from './Header';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchByName, setSeachByName] = useState('');
  const [searchBySpecies, setSearchBySpecies] = useState('all');
  const [searchByPlanet, setSearchByPlanet] = useState([]);


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
  const handlePlanet = (value) => {
    if (searchByPlanet.includes(value)) {
      const index = searchByPlanet.indexOf(value)
      searchByPlanet.splice(index, 1);
      setSearchByPlanet([...searchByPlanet])
    } else {
      setSearchByPlanet([...searchByPlanet, value])
    }
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
    .filter((character) => {
      if (searchByPlanet.length > 0) {
        return searchByPlanet.includes(character.origin)
      }
      else return true
    })

  //crear el array de species
  const getSpecies = () => {
    const arrayOfSpecies = characters.map(each => each.species)
    const filterSpecies = arrayOfSpecies
      .sort()
      .filter((each, index) => {
        return arrayOfSpecies.indexOf(each) === index;

      })
    return filterSpecies

  }
  //crear el array de orígenes
  const getPlanets = () => {
    const arrayOfPlanets = characters.map(each => each.origin)
    const filterPlanets = arrayOfPlanets
      .sort()
      .filter((each, index) => {
        return arrayOfPlanets.indexOf(each) === index;
      })
    return filterPlanets
  }
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <Filters handleSearch={handleSearch} searchByName={searchByName} species={getSpecies()} handleSpecie={handleSpecie} searchBySpecies={searchBySpecies} planets={getPlanets()} handlePlanet={handlePlanet} searchByPlanet={searchByPlanet} />
            {filteredCharacters.length > 0 ? <CharacterList characters={filteredCharacters} /> : <p className='app__error__msg'>No hay resultados para tu búsqueda</p>}
          </>
        } />
        <Route path='/CharacterDetail/:id' element={<CharacterDetail characters={filteredCharacters} />} />
      </Routes>
    </div>
  );
}

export default App;
