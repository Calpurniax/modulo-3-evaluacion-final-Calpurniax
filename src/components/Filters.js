//Styles
import '../styles/components/Filters.scss';
//Components
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByPlanet from './FilterByPlanet';
import FilterByLocation from './FilterByLocation';
//PropTypes
import PropTypes from 'prop-types';


const Filters = ({ species, handleSearch, filters, planets, }) => {
    const handleSubmit = (ev) => { ev.preventDefault() }
    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='form__filter'>
                <FilterBySpecies species={species} filters={filters} handleSearch={handleSearch} />
                <FilterByName handleSearch={handleSearch} filters={filters} />
            </div>
            <FilterByPlanet planets={planets} filters={filters} handleSearch={handleSearch} />
            <FilterByLocation filters={filters} handleSearch={handleSearch} />
        </form>
    )
};
Filters.propTypes = {
    species: PropTypes.array,
    searchBySpecies: PropTypes.string,
    handleSearch: PropTypes.func,
    searchByName: PropTypes.string,
    planets: PropTypes.array,
    searchByPlanet: PropTypes.array,
    searchByLocation: PropTypes.bool,
}
export default Filters