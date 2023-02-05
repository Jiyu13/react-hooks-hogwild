import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import GreasedFilter from "./GreasedFilter";
import Sort from "./Sort";

import hogs from "../porkers_data";

function App() {

	const [hogList, setHogList] = useState(hogs)
	const [sortBy, setSortBy] = useState("All")

	function handleGreasedFilter() {
		const greasedHogs = hogList.filter(hog => hog.greased === true)
		setHogList(greasedHogs)
	}

	function handleSort(event) {
		setSortBy(event.target.value)
	}

	console.log(sortBy)
	const sortArray = hogList.sort((a, b) => {
		if (sortBy === "name") {
			return a.name.localeCompare(b.name)
		} else if (sortBy === "weight") {
			console.log(a.weight, b.weight)
			return a.weight.toString().localeCompare(b.weight.toString())
		} else {
			return hogList
		}
	})
	console.log(sortArray)


	return (
		<div className="App">
			<Nav />
			<Sort onSortChange={handleSort} sort={sortBy}/>
			<GreasedFilter onGreasedFilter={handleGreasedFilter}/>
			<HogList hogs={sortArray}/>
		</div>
	);
}

export default App;
