//Components
import Checkbox from './Checkbox';
//PropTypes
import PropTypes from 'prop-types';

const FilterByLocation = ({ handleSearch, filters }) => {
    const handleCheckboxLocation = (ev) => {
        const status = (!filters.byLocation)
        handleSearch(status, ev.target.name)
    };
    return (
        <div className='form__location'>
            <label htmlFor="location">Mira sólo los personajes que están en su sitio de origen</label>
            <Checkbox name={'byLocation'} id={'location'} value={'location'} onChange={handleCheckboxLocation} checked={filters.byLocation} />
        </div>
    )
};
FilterByLocation.propTypes = {
    handleLocation: PropTypes.func,
    searchByLocation: PropTypes.bool,
}
export default FilterByLocation