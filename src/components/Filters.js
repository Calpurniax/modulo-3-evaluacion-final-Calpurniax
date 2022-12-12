const Filters = ({ handleSearch }) => {
    const handleInput = (ev) => {
        ev.preventDefault()
        handleSearch(ev.target.value.toLowerCase())
    }
    return (
        <form>
            <label htmlFor="name">Busca por nombre</label>
            <input type="text" name="name" id="name" onInput={handleInput} />
        </form>
    )
};
export default Filters