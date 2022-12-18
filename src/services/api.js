function getCharacters() {
    return fetch('https://rickandmortyapi.com/api/character')
        .then((response) =>
            response.json()
        )
        .then((response) => {
            const cleanData = response.results
                .map((obj) => {
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

            return cleanData
        })

}
export { getCharacters };
