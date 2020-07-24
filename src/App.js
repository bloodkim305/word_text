import React, { useState } from "react";
import EnglishWord from "./EnglishWord";
import "./App.css";

const word = [
	{
		english: "degrade",
		han: "가치를 떨어뜨리다, 타락시키다, 강등시키다, 악화시키다",
	},
	{ english: "abuse", han: "남용, 학대, 욕설, 남용하다, 학대하다" },
	{
		english: "absurd",
		han: "부조리, 우스꽝스러운, 터무니없는, 어리석은, 불합리한",
	},
	{ english: "dismiss", han: "일축하다, 무시하다, 해고하다, 기각하다" },
	{ english: "abolish", han: "폐지하다, 없애다, 철폐하다" },
	{ english: "isolate", han: "고립시키다, 격리하다, 분리하다, 구분하다" },
	{ english: "extract", han: "추출물, 발췌, 추출하다" },
	{ english: "capacity", han: "(생산) 능력, 수용력" },
	{ english: "inevitable", han: "불가피한, 필연적인" },
	{
		english: "mean",
		han:
			"의미하다, 의도하다, 의미[중요성]를 가지다, (수동태로) 하게 되다, 평균, 뒤떨어진, 천한, 심술궂은",
	},
];

const extractQuestion = () => {
	const test = [];
	const wordIndexArray = [];
	let i = 0;
	while (i < 20) {
		const wordIndex = Math.floor(Math.random() * word.length);
		if (wordIndexArray.includes(wordIndex)) {
			continue;
		}
		wordIndexArray.push(wordIndex);
		test.push(word[wordIndex]);
		i++;
	}
	return test;
};

const useInput = (initialValue, validator) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		let willUpdate = true;
		if (typeof validator === "function") {
			willUpdate = validator(value);
		}
		if (willUpdate) {
			setValue(value);
		}
	};
	return { value, onChange };
};

function App() {
	const maxLen = (value) => value.length >= 2;

	const [question, setQuestion] = useState(extractQuestion());
	const [answer, setAnswer] = useState(false);
	const questionNumber = useInput("명규", maxLen);

	const handleQuestion = (e) => {
		e.preventDefault();
		setQuestion(extractQuestion());
		setAnswer(false);
	};

	const handleAnswer = (event) => {
		event.preventDefault();
		if (!answer) {
			setAnswer(true);
		} else {
			setAnswer(false);
		}
	};

	return (
		<>
			<form>
				<input placeholder="문제수: 40이하" {...questionNumber} />
				<button className="button" onClick={handleAnswer}>
					정답보기&숨기기
				</button>
				<button className="button" onClick={handleQuestion}>
					문제출제
				</button>
			</form>
			<ul className="questions">
				{question.map((question, index) => (
					<EnglishWord
						key={index}
						english={question.english}
						han={question.han}
						answerMode={answer}
					/>
				))}
			</ul>
		</>
	);
}

export default App;
