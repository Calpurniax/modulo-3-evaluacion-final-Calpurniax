//Components
import Input from './Input';
//PropTypes
import PropTypes from 'prop-types';

const FilterByName = ({ handleSearch, searchByName }) => {
    const handleInput = (ev) => {
        ev.preventDefault()
        handleSearch(ev.target.value.toLowerCase())
    }
    return (
        <div className='form__name'>
            <label htmlFor="name" className='form__name__label'>Busca por nombre</label>
            <Input
                cssClass='form__name__input'
                inputName='name'
                inputId='name'
                onInput={handleInput}
                value={searchByName}
                placeHolder={'Paquita Salas'}
            />
        </div>
    )
};
FilterByName.propTypes = {
    handleSearch: PropTypes.func,
    searchByName: PropTypes.string,
}
export default FilterByName