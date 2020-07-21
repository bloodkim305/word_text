import React, { useLayoutEffect } from "react";
import "./Text.css";
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
	while (i < 5) {
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

function showAnswer(answerMode) {
	const hiddenAnswer = document.querySelector(".answer");
	console.log(hiddenAnswer);
	if (answerMode) {
		hiddenAnswer.classList.remove("hidden");
	}
}

function EnglishWord({ english, han }) {
	return (
		<div className="qAndA">
			<h4 className="question">{english}</h4>
			<h4 className="answer hidden">{han}</h4>
		</div>
	);
}

function HanWord({ english, han }) {
	return (
		<div className="qAndA">
			<h4 className="question">{han}</h4>
			<h4 className="answer hidden">{english}</h4>
		</div>
	);
}

function Text(englishMode, answerMode) {
	const questions = extractQuestion();
	showAnswer(answerMode);
	return (
		<div className="question">
			{englishMode.mode
				? questions.map((question, index) => (
						<EnglishWord
							key={index}
							english={question.english}
							han={question.han}
						/>
				  ))
				: questions.map((question, index) => (
						<HanWord
							key={index}
							han={question.han}
							english={question.english}
						/>
				  ))}
		</div>
	);
}

export default Text;
