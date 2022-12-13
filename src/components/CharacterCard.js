import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CharacterCard = ({ character }) => {
    return (
        <li key={character.id}>
            <Link to={`/CharacterDetail/${character.id}`}>
                <article id={character.id}>
                    <img src={character.img} alt={`foto de ${character.name}`}>
                    </img>
                    <h2>{character.name}</h2>
                    <p>Especie: {character.species}</p>
                </article>
            </Link>
        </li>
    )

}
CharacterCard.propTypes = {
    characters: PropTypes.object,
}
export default CharacterCard