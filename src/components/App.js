import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import GreasedFilter from "./GreasedFilter";

import hogs from "../porkers_data";

function App() {

	const [hogList, setHogList] = useState(hogs)

	function handleGreasedFilter() {
		const greasedHogs = hogList.filter(hog => hog.greased === true)
		setHogList(greasedHogs)
		console.log()
	}


	return (
		<div className="App">
			<Nav />
			<GreasedFilter onGreasedFilter={handleGreasedFilter}/>
			<HogList hogs={hogList}/>
		</div>
	);
}

export default App;
