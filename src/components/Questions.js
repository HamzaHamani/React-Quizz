import Options from "./Options";

function Questions({ question, points, answer, dispatch }) {
  //   console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        points={points}
        answer={answer}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Questions;
