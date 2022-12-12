import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { getCharacters } from '../services/api';

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
    </div>
  );
}

export default App;
