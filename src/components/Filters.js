const Filters = ({ handleSearch, searchByName }) => {
    const handleSubmit = (ev) => { ev.preventDefault() }
    const handleInput = (ev) => {
        ev.preventDefault()
        handleSearch(ev.target.value.toLowerCase())
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Busca por nombre</label>
            <input type="text" name="name" id="name" onInput={handleInput} value={searchByName} />
        </form>
    )
};
export default Filters