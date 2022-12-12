import { Link } from "react-router-dom";
const CharacterDetail = ({ character }) => {
    return (
        <section>
            <article id={characterFound.id}>
                <img src={characterFound.img} alt={`Foto de ${characterFound.name}`} />
                <h2>{characterFound.name}</h2>
                <p>Especie: {character.species}</p>
                <ul>
                    <li>Origen:{character.origin}</li>
                    <li>Status:{character.status}</li>
                    <li>Número de episodios en los que aparece:{character.episodes}</li>
                </ul>
            </article>
            <Link to={'/'}>Volver al inicio</Link>
        </section >

    )
}; export default CharacterDetail