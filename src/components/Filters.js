import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import PropTypes from 'prop-types';

const Filters = ({ handleSearch, searchByName, species, handleSpecie, searchBySpecies }) => {
    const handleSubmit = (ev) => { ev.preventDefault() }
    return (
        <form onSubmit={handleSubmit}>
            <FilterBySpecies species={species} handleSpecie={handleSpecie} searchBySpecies={searchBySpecies} />
            <FilterByName handleSearch={handleSearch} searchByName={searchByName} />

        </form>
    )
};
Filters.propTypes = {
    handleSpecie: PropTypes.func,
    searchBySpecies: PropTypes.string,
    species: PropTypes.array,
    handleSearch: PropTypes.func,
    searchByName: PropTypes.string,
}
export default Filters