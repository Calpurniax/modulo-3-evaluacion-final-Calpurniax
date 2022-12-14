//Styles
import '../styles/components/CharacterList.scss';
//Components
import CharacterCard from "./CharacterCard";
//PropTypes
import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => {
    const renderList = () => {
        return characters.map((character) => {
            return <CharacterCard character={character} key={character.id} />
        })
    }
    return (
        <section>
            <ul className="list">{renderList()}</ul>
        </section>
    )
};
CharacterList.propTypes = {
    characters: PropTypes.array,
}
export default CharacterList