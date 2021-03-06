import React, { useState } from "react";
import TopBar from "./components/TopBar";
import TestPage from "./components/TestPage";
import wordsFile from "./dataFile/wordsFile.json";
import "./App.css";

function App() {
	const [answer, setAnswer] = useState(false);
	const [question, setQuestion] = useState([]);
	const day = 50;

	const extractQuestion = (number, inputFrom, inputTo) => {
		const test = [];
		const wordIndexArray = [];
		const firstDay = (inputFrom - 1) * day;
		const secondDay = inputTo * day;
		const rangeArray = wordsFile.slice(firstDay, secondDay);

		let i = 0;
		while (i < number) {
			const wordIndex = Math.floor(Math.random() * rangeArray.length);
			if (wordIndexArray.includes(wordIndex)) {
				continue;
			}
			wordIndexArray.push(wordIndex);
			test.push(rangeArray[wordIndex]);
			i++;
		}
		// console.log(wordsFile.filter((word) => word.english === "proceed")[0].han.length);
		// console.log(wordsFile.map((word) => word.han.length).sort((a, b) => a - b));
		// console.log(rangeArray.map((word) => Object.values(word)));
		// console.log(test.every((value) => rangeArray.includes(value)));
		return test;
	};

	const saveQuestion = (questionArray) => {
		return setQuestion(questionArray);
	};

	const handleAnswer = () => {
		if (!answer) {
			setAnswer(true);
		} else {
			setAnswer(false);
		}
	};

	const handleQuestion = (value, from, to) => {
		const parsedNumber = parseInt(value, 10);
		const parsedFrom = parseInt(from, 10);
		const parsedTo = parseInt(to, 10);
		if (isNaN(parsedNumber) || parsedNumber > 50) {
			return alert("50이하의 숫자만 입력하시오");
		} else if (
			isNaN(parsedFrom) ||
			isNaN(parsedTo) ||
			parsedFrom > 100 ||
			parsedTo > 100
		) {
			return alert("범위지정에는 100이하의 숫자만 입력하시오");
		} else if (parsedFrom > parsedTo) {
			return alert("시작날이 더 작은 수이어야 합니다.");
		}
		setAnswer(false);
		saveQuestion(extractQuestion(parsedNumber, parsedFrom, parsedTo));
	};

	return (
		<>
			<TopBar handleQuestion={handleQuestion} handleAnswer={handleAnswer} />
			<TestPage answer={answer} question={question} />
		</>
	);
}

export default App;
