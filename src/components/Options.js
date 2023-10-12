function Options({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;
  // console.log(options);
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${answer === index ? "answer" : ""}`}
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
