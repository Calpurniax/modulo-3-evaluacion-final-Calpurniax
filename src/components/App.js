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
  const [filters, setFilters] = useState({
    byName: '',
    bySpecies: 'all',
    byPlanet: ([]),
    byLocation: (false)
  })
  //call to API
  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data)
    })
  }, []);
  //handle filter object
  const handleSearch = (value, name) => {
    console.log(value, name)
    if (name === 'byPlanet') {
      if (filters.byPlanet.includes(value)) {
        const index = filters.byPlanet.indexOf(value)
        filters.byPlanet.splice(index, 1);
        setFilters({ ...filters })
      } else {
        const newPlanet = []
        newPlanet.push(...filters.byPlanet)
        newPlanet.push(value)
        setFilters({ ...filters, 'byPlanet': newPlanet })
      }
    } else {
      setFilters({ ...filters, [name]: value })
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
      if (filters.byName !== '') {
        return character.name.toLowerCase().includes(filters.byName)
      } else {
        return true
      }
    })
    .filter((character) => {
      return filters.bySpecies === 'all' ? true : character.species === (filters.bySpecies)

    })
    .filter((character) => {
      if (filters.byPlanet.length > 0) {
        return filters.byPlanet.includes(character.origin)
      }
      else return true
    })
    .filter((character) => {
      if (filters.byLocation) {
        return character.location === character.origin
      }
      return true
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
            <Filters handleSearch={handleSearch} species={getSpecies()} planets={getPlanets()} filters={filters} />
            {filteredCharacters.length > 0 ? <CharacterList characters={filteredCharacters} /> : <p className='app__error__msg'>No hay resultados para tu búsqueda</p>}
          </>
        } />
        <Route path='/CharacterDetail/:id' element={<CharacterDetail characters={filteredCharacters} />} />
      </Routes>
    </div>
  );
}
export default App;
