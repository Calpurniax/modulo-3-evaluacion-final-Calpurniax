//Styles
import '../styles/App.scss';
//hooks
import { useState, useEffect } from 'react';
//Fetch
import { getCharacters } from '../services/api';
//Components
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
//Router 
import { Routes, Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchByName, setSeachByName] = useState('');
  const [searchBySpecies, setSearchBySpecies] = useState('all');
  const [searchByPlanet, setSearchByPlanet] = useState([]);


  //call to API
  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data)
    })
  }, []);

  //handle search form inputs
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

  //Array filters
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

  //Create an array for species
  const getSpecies = () => {
    const arrayOfSpecies = characters.map(each => each.species)
    const filterSpecies = arrayOfSpecies
      .sort()
      .filter((each, index) => {
        return arrayOfSpecies.indexOf(each) === index;

      })
    return filterSpecies

  }
  //Create an array for planets
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
