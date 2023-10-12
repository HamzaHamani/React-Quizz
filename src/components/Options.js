function Options({ question, answer, dispatch, points }) {
  const hasAnswered = answer !== null;

  // console.log(options);
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          disabled={answer !== null}
          key={option}
          //! we add specific styles to button we clicked on
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            hasAnswered //! to not show correct and wrong answers with color styles when they are first displayed
              ? index === question.correctOption //? if one of the answers equal to right answer index its gonna get correct clas
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => {
            dispatch({ type: "newAnswer", payload: index }); //! we send the index to know wich button answer we clicked on
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
