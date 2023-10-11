function StartScreen({ numQuestion, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestion} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => {
          // console.log(dispatch())
          dispatch({ type: "start" });
        }}
      >
        Lests start
      </button>
    </div>
  );
}

export default StartScreen;
