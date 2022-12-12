import CharacterCard from "./CharacterCard";

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
export default CharacterList