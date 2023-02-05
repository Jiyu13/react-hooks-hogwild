function Sort( {onSortChange, sort} ) {
    return (
        <select onChange={onSortChange} value={sort}>
            <option value="all">All</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
    )
}

export default Sort