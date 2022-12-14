import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <input type={props.inputType} name={props.inputName} id={props.inputId} onInput={props.onInput} value={props.value} />
    )
};
Input.propTypes = {
    inputType: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    inputId: PropTypes.string,
    onInput: PropTypes.func.isRequired,
    value: PropTypes.string,
}
Input.defaultProps = {
    inputType: 'text',
};
export default Input