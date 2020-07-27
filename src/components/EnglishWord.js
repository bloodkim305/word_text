import React from "react";
import "./EnglishWord.css";

function EnglishWord({ english, han, answerMode }) {
	return answerMode ? (
		<li className="qAndA">
			<div className="question">{english}</div>
			<div className="answer">{han}</div>
		</li>
	) : (
		<li className="qAndA">
			<div className="question">{english}</div>
			<div className="answer hidden">{han}</div>
		</li>
	);
}

export default EnglishWord;
