import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
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
  const maxLen = value => value.length <= 2;
  const maxLen3 = value => value.length <= 3;
  const questionNumber = useInput("", maxLen);
  const fromNumber = useInput("", maxLen3);
  const toNumber = useInput("", maxLen3);

  const handleQuestionAndAnswer = event => {
    event.preventDefault();
    if (event.target.className === "setQuestion") {
      handleQuestion(questionNumber.value, fromNumber.value, toNumber.value);
    } else {
      handleAnswer();
    }
  };

  return (
    <form>
      <div className="questionRange">
        <input className="fromInput" placeholder="Day:" {...fromNumber} />
        <span>에서</span>
        <input className="untilInput" placeholder="Day:" {...toNumber} />
        <span>까지</span>
        <input
          className="questionNumber"
          placeholder="문제수: 40이하"
          {...questionNumber}
        />
      </div>
      <div onClick={handleQuestionAndAnswer}>
        <button className="showingHidden">정답보기&숨기기</button>
        <button className="setQuestion">문제출제</button>
      </div>
    </form>
  );
};

export default TopBar;
