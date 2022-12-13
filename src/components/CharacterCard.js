import '../styles/components/CharacterCard.scss';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CharacterCard = ({ character }) => {
    return (
        <li key={character.id} className='card'>
            <Link to={`/CharacterDetail/${character.id}`} className='card__link'>
                <article id={character.id} className='card__article'>
                    <img src={character.img} alt={`foto de ${character.name}`} className='card__article__img'>
                    </img>
                    <h2 className='card__article__title'>{character.name}</h2>
                    <p className='card__article__species'>Especie: {character.species}</p>
                </article>
            </Link>
        </li>
    )

}
CharacterCard.propTypes = {
    characters: PropTypes.object,
}
export default CharacterCard