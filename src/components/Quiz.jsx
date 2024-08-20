import React, { useCallback, useState } from "react";
import questions from "../questions";
import completeImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === questions.length;

  const handleSelectAnswer = useCallback((selectAnswer) => {
    setAnswerState("answered");
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectAnswer];
    });
    setTimeout(() => {
      if (selectAnswer === questions[activeQuestionIndex].answers[0]) {
      }
    }, 1000);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={completeImg} alt="complete" />
        <h2>Quiz is completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...questions[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
