//Components
import Checkbox from './Checkbox';
//PropTypes
import PropTypes from 'prop-types';

const FilterByLocation = ({ handleLocation, searchByLocation }) => {
    const handleChechboxLocation = (ev) => {
        console.log(ev.target.value)
        const status = (!searchByLocation)
        handleLocation(status)
    };
    return (
        <div className='form__location'>
            <label htmlFor="location">Mira sólo los personajes que están en su sitio de origen</label>
            <Checkbox name={'location'} id={'location'} value={'location'} onChange={handleChechboxLocation} checked={searchByLocation} />
        </div>
    )
};
FilterByLocation.propTypes = {
    handleLocation: PropTypes.func,
    searchByLocation: PropTypes.bool,
}
export default FilterByLocation