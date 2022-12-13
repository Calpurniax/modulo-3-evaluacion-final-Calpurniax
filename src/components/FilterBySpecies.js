const FilterBySpecies = ({ species }) => {

    const handleSelect = (ev) => {
        ev.preventDefault()
        // handleSearch(ev.target.value.toLowerCase())
    }
    const renderSpecies = () => {
        return species.map((eachSpecie, index) => < option key={index} value={eachSpecie}> {eachSpecie}</option >)
    }
    return (
        <>
            <label htmlFor="name">Busca por especie</label>
            <select name="species" id="species" onChange={handleSelect} >
                <option value='all'></option>
                {renderSpecies()}
            </select>

        </>
    )
};
export default FilterBySpecies