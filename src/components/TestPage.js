import React from "react";
import EnglishWord from "./EnglishWord";

const TestPage = ({ answer, question }) => {
  return (
    <ul className="questions">
      {question.map(question => (
        <EnglishWord
          key={question.english}
          english={question.english}
          han={question.han}
          answerMode={answer}
        />
      ))}
    </ul>
  );
};

export default TestPage;