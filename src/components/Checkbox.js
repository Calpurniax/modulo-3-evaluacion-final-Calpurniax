//PropTypes
import PropTypes from 'prop-types';

const Checkbox = (props) => {
    return (
        <input type={props.inputType} name={props.name} id={props.id} value={props.value} onChange={props.onChange} checked={props.checked} />
    )
};
Checkbox.defaultProps = {
    inputType: 'checkbox',
};
Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool,
}

export default Checkbox