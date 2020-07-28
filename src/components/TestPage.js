import React from "react";
import EnglishWord from "./EnglishWord";

const TestPage = ({ answer, question }) => {
	return (
		<ul className="questions">
			{question.map((question, index) => (
				<EnglishWord
					key={question.english}
					number={index}
					english={question.english}
					han={question.han}
					answerMode={answer}
				/>
			))}
		</ul>
	);
};

export default TestPage;
