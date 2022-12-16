function getCharacters() {
    return fetch('https://rickandmortyapi.com/api/character')
        .then((response) =>
            response.json()
        )
        .then((response) => {
            const cleanData = response.results.map((obj) => {
                return {
                    id: obj.id,
                    img: obj.image,
                    name: obj.name,
                    species: obj.species,
                    origin: obj.origin.name,
                    location: obj.location.name,
                    status: obj.status,
                    episodes: obj.episode.length,
                }
            })
            return cleanData
        })
}
export { getCharacters };

// https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json
//(esta es la buena)
//https://rickandmortyapi.com/api/character 