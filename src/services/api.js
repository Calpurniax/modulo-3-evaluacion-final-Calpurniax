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
                    status: obj.status,
                    episodes: obj.episode.length,

                }
            })
            return cleanData
        })
}
export { getCharacters };