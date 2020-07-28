import React, { useState } from "react";
import "./TopBar.css";

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

const TopBar = ({ handleQuestion, handleAnswer }) => {
	const maxLen = (value) => value.length <= 2;
	const maxLen3 = (value) => value.length <= 3;
	const questionNumber = useInput("", maxLen);
	const fromNumber = useInput("", maxLen3);
	const toNumber = useInput("", maxLen3);

	const handleQuestionAndAnswer = (event) => {
		event.preventDefault();
		console.log(event.target);
		if (event.target.id === "setQuestion") {
			handleQuestion(questionNumber.value, fromNumber.value, toNumber.value);
		} else {
			handleAnswer();
		}
	};

	return (
		<form>
			<div className="questionRange">
				<input className="inputForm" placeholder="Day" {...fromNumber} />
				<div>에서</div>
				<input className="inputForm" placeholder="Day" {...toNumber} />
				<div>까지</div>
				<input
					className="inputForm"
					placeholder="50문제 이하"
					{...questionNumber}
				/>
				<div>문제</div>
			</div>
			<div className="buttons" onClick={handleQuestionAndAnswer}>
				<button className="button">정 답</button>
				<button id="setQuestion" className="button">
					출 제
				</button>
			</div>
		</form>
	);
};

export default TopBar;
