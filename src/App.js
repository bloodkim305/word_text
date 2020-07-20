import React, { useEffect, useState } from "react";
import Text from "./Text";

function App() {
	const [questionMode, setMode] = useState(false);
	const handleMode = () => {
		if (questionMode) {
			setMode(false);
		} else {
			setMode(true);
		}
	};
	return (
		<div className="App">
			<button onClick={handleMode}>문제출제</button>
			<Text />
		</div>
	);
}

export default App;
