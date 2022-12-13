import PropTypes from 'prop-types';

const FilterByName = ({ handleSearch, searchByName }) => {
    const handleInput = (ev) => {
        ev.preventDefault()
        handleSearch(ev.target.value.toLowerCase())
    }
    return (
        <div className='form__name'>
            <label htmlFor="name" className='form__name__label'>Busca por nombre</label>
            <input type="text" name="name" id="name" onInput={handleInput} value={searchByName} />
        </div>
    )
};
FilterByName.propTypes = {
    handleSearch: PropTypes.func,
    searchByName: PropTypes.string,
}
export default FilterByName