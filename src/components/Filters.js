import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = ({ handleSearch, searchByName, species, handleSpecie, searchBySpecies }) => {
    const handleSubmit = (ev) => { ev.preventDefault() }


    return (
        <form onSubmit={handleSubmit}>
            <FilterBySpecies species={species} handleSpecie={handleSpecie} searchBySpecies={searchBySpecies} />
            <FilterByName handleSearch={handleSearch} searchByName={searchByName} />

        </form>
    )
};
export default Filters