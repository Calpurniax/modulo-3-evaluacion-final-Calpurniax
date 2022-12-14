import '../styles/components/Filters.scss';
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByPlanet from './FilterByPlanet';
import PropTypes from 'prop-types';

const Filters = ({ species, handleSearch, searchByName, handleSpecie, searchBySpecies, planets, handlePlanet, searchByPlanet }) => {
    const handleSubmit = (ev) => { ev.preventDefault() }
    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='form__filter'>
                <FilterBySpecies species={species} handleSpecie={handleSpecie} searchBySpecies={searchBySpecies} />
                <FilterByName handleSearch={handleSearch} searchByName={searchByName} />
            </div>
            <FilterByPlanet planets={planets} handlePlanet={handlePlanet} searchByPlanet={searchByPlanet} />

        </form>
    )
};
Filters.propTypes = {
    species: PropTypes.array,
    handleSpecie: PropTypes.func,
    searchBySpecies: PropTypes.string,
    handleSearch: PropTypes.func,
    searchByName: PropTypes.string,
    planets: PropTypes.array,
    handlePlanet: PropTypes.func,
    searchByPlanet: PropTypes.array,
}
export default Filters