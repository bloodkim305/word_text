import React from "react";
import "./EnglishWord.css";

function EnglishWord({ english, han, answerMode }) {
	return answerMode ? (
		<li className="qAndA">
			<div className="question">{english}</div>
			<span className="answer">{han}</span>
		</li>
	) : (
		<li className="qAndA">
			<div className="question">{english}</div>
			<span className="answer hidden">{han}</span>
		</li>
	);
}

export default EnglishWord;
