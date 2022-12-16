//Components
import Checkbox from './Checkbox';
//PropTypes
import PropTypes from 'prop-types';

const FilterByPlanet = ({ planets, handleSearch, filters }) => {
    const handleCheckbox = (event) => {
        handleSearch(event.target.value, event.target.name)
    }
    const renderInput = () => {
        if (planets.length > 0)
            return planets.map((eachPlanet, index) => {
                return (
                    <li key={index}>
                        <Checkbox name='byPlanet' id={eachPlanet} value={eachPlanet} onChange={handleCheckbox} checked={filters.byPlanet.includes(eachPlanet) ? true : false} />
                        {eachPlanet}
                    </li>
                )
            })
    }
    return (
        <div>
            <label className="form__planet__label" htmlFor="planet">Filtrar por origen</label>
            <ul className="form__planet__ul">{renderInput()}</ul>
        </div>
    )
};
FilterByPlanet.propTypes = {
    planets: PropTypes.array,
    handlePlanet: PropTypes.func,
    searchByPlanet: PropTypes.array,
}
export default FilterByPlanet
//