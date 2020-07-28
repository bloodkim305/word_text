import React from "react";
import "./EnglishWord.css";

function EnglishWord({ english, han, answerMode, number }) {
	return answerMode ? (
		<li className="qAndA qAndASize">
			<div className="question">{`${number + 1}. ${english}`}</div>
			<div className="answer">{han}</div>
		</li>
	) : (
		<li className="qAndA">
			<div className="question">{`${number + 1}. ${english}`}</div>
		</li>
	);
}

export default EnglishWord;
