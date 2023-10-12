function Options({ question, answer, dispatch, points }) {
  const hasAnswered = answer !== null;

  // console.log(options);
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          disabled={answer !== null}
          key={option}
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => {
            dispatch({ type: "newAnswer", payload: index });
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
