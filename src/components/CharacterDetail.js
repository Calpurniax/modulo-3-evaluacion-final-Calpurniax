import '../styles/components/CharacterDetail.scss';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

const CharacterDetail = ({ characters }) => {
    const { id } = useParams()
    if (characters.length > 0) {
        const characterFound = characters.find(each => each.id === parseInt(id))
        if (characterFound) {
            return (
                <section className="detail">
                    <article id={characterFound.id} className="detail__article">
                        <img src={characterFound.img} alt={`Foto de ${characterFound.name}`} />
                        <h2 className="detail__article__name">{characterFound.name}</h2>
                        <ul className="detail__article__list">
                            <li className="detail__article__list--element">Especie: {characterFound.species}</li>
                            <li className="detail__article__list--element">Origen: {characterFound.origin}</li>
                            <li className="detail__article__list--element">Estatus: {characterFound.status}</li>
                            <li className="detail__article__list--element">Número de episodios en los que aparece: {characterFound.episodes}</li>
                        </ul>
                    </article>
                    <Link to={'/'} className="detail__link"><i className="fa-solid fa-backward"></i> Volver al inicio</Link>
                </section >
            )
        } else {
            return <p className='detail__error__msg'>Lo sentimos, no existe este personaje</p>
        }
    } else {
        return <p className='detail__error__msg'>Cargando personaje</p>
    }
};
CharacterDetail.propTypes = {
    characters: PropTypes.array,
}
export default CharacterDetail