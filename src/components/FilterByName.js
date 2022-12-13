const FilterByName = ({ handleSearch, searchByName }) => {

    const handleInput = (ev) => {
        ev.preventDefault()
        handleSearch(ev.target.value.toLowerCase())
    }
    return (
        <>
            <label htmlFor="name">Busca por nombre</label>
            <input type="text" name="name" id="name" onInput={handleInput} value={searchByName} />
        </>
    )
};
export default FilterByName