import CharacterCard from "./CharacterCard";
import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => {
    const renderList = () => {
        return characters.map((character) => {
            return <CharacterCard character={character} key={character.id} />
        })
    }
    return (
        <section>
            <ul>{renderList()}</ul>
        </section>
    )
};
CharacterList.propTypes = {
    characters: PropTypes.array,
}
export default CharacterList