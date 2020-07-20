import React from "react";
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
	let i = 0;
	while (i < 5) {
		const wordIndex = Math.floor(Math.random() * word.length);
		test.push(word[wordIndex]);
		i++;
	}
	return test;
};

function Word({ english, han }) {
	return (
		<div className="question">
			<h4 className="english">{english}</h4>
			<h4 className="han">{han}</h4>
		</div>
	);
}

function Text() {
	const questions = extractQuestion();
	console.log(questions);
	return (
		<div className="question">
			{questions.map((question, index) => (
				<Word key={index}english={question.english} han={question.han} />
			))}
		</div>
	);
}

export default Text;
