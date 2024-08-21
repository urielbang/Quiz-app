import React from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkip,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkip} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        answerState={answerState}
        onSelect={onSelectAnswer}
        selectedAnswer={selectedAnswer}
      />
    </div>
  );
}
