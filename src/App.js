import React, { useEffect, useState } from "react";
import Text from "./Text";

function App() {
	const [englishMode, setEnglish] = useState(true);
	const [hanMode, setHan] = useState(false);
	const [check, setCheck] = useState(false);

	const handleCheck = () => {
		if (!check) {
			setCheck(true);
		}
	};

	const handleEnglish = () => {
		if (!englishMode) {
			setEnglish(true);
			setHan(false);
			setCheck(false);
		}
	};
	const handleHan = () => {
		if (!hanMode) {
			setHan(true);
			setEnglish(false);
			setCheck(false);
		}
	};
	return (
		<div className="App">
			<button onClick={handleEnglish}>English</button>
			<button onClick={handleHan}>Han</button>
			<button onClick={handleCheck}>Han</button>
			<Text questionMode={englishMode} answerMode={check} />
		</div>
	);
}

export default App;
