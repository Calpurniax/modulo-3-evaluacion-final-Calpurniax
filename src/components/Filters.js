import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = ({ handleSearch, searchByName, species }) => {
    const handleSubmit = (ev) => { ev.preventDefault() }


    return (
        <form onSubmit={handleSubmit}>
            <FilterBySpecies species={species} />
            <FilterByName handleSearch={handleSearch} searchByName={searchByName} />

        </form>
    )
};
export default Filters