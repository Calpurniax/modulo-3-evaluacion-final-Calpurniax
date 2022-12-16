const Checkbox = (props) => {
    return (
        <input type={props.inputType} name={props.name} id={props.id} value={props.value} onChange={props.onChange} checked={props.checked} />
    )
};
Checkbox.defaultProps = {
    inputType: 'checkbox',
};
export default Checkbox