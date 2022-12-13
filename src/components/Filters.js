import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = ({ handleSearch, searchByName, species, handleSpecie }) => {
    const handleSubmit = (ev) => { ev.preventDefault() }


    return (
        <form onSubmit={handleSubmit}>
            <FilterBySpecies species={species} handleSpecie={handleSpecie} />
            <FilterByName handleSearch={handleSearch} searchByName={searchByName} />

        </form>
    )
};
export default Filters