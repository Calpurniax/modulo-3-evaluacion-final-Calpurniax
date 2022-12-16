//PropTypes
import PropTypes from 'prop-types';

const FilterBySpecies = ({ species, handleSearch, filters }) => {
    const handleSelect = (ev) => {
        ev.preventDefault()
        handleSearch(ev.target.value, ev.target.name)
    }
    const renderSpecies = () => {
        return species.map((eachSpecie, index) => < option key={index} value={eachSpecie} > {eachSpecie} </option >)
    }
    return (
        <div className='form__species'>
            <label htmlFor="species">Busca por especie</label>
            <select name="bySpecies" id="species" onChange={handleSelect} value={filters.bySpecies}>
                <option value='all'></option>
                {renderSpecies()}
            </select>
        </div>
    )
};
FilterBySpecies.propTypes = {
    species: PropTypes.array,
    handleSpecie: PropTypes.func,
    searchBySpecies: PropTypes.string,

}
export default FilterBySpecies
