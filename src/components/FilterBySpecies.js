import PropTypes from 'prop-types';

const FilterBySpecies = ({ species, handleSpecie, searchBySpecies }) => {
    const handleSelect = (ev) => {
        ev.preventDefault()
        handleSpecie(ev.target.value)
    }
    const renderSpecies = () => {
        return species.map((eachSpecie, index) => < option key={index} value={eachSpecie} > {eachSpecie} </option >)
    }
    return (
        <>
            <label htmlFor="name">Busca por especie</label>
            <select name="species" id="species" onChange={handleSelect} value={searchBySpecies}>
                <option value='all'></option>
                {renderSpecies()}
            </select>

        </>
    )
};
FilterBySpecies.propTypes = {
    handleSpecie: PropTypes.func,
    searchBySpecies: PropTypes.string,
    species: PropTypes.array,
}
export default FilterBySpecies
