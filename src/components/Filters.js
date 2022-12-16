//Styles
import '../styles/components/Filters.scss';
//Components
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByPlanet from './FilterByPlanet';
import FilterByLocation from './FilterByLocation';
//PropTypes
import PropTypes from 'prop-types';


const Filters = ({ species, handleSearch, searchByName, handleSpecie, searchBySpecies, planets, handlePlanet, searchByPlanet, handleLocation, searchByLocation }) => {
    const handleSubmit = (ev) => { ev.preventDefault() }
    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='form__filter'>
                <FilterBySpecies species={species} handleSpecie={handleSpecie} searchBySpecies={searchBySpecies} />
                <FilterByName handleSearch={handleSearch} searchByName={searchByName} />
            </div>
            <FilterByPlanet planets={planets} handlePlanet={handlePlanet} searchByPlanet={searchByPlanet} />
            <FilterByLocation handleLocation={handleLocation} searchByLocation={searchByLocation} />
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
    handleLocation: PropTypes.func,
    searchByLocation: PropTypes.bool,
}
export default Filters