import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Error from "./Error";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Questions from "./Questions";
function App() {
  const initialState = {
    questions: [],

    //loding erro  ready active finished
    status: "loading",
    index: 0,
    answer: null,
    errorM: "",
    points: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dataRecieved":
        return {
          ...state,
          questions: action.payload,

          status: "ready",
        };
      case "dataFailed":
        return {
          ...state,
          status: "error",
          errorM: action.payload,
        };
      case "start":
        return { ...state, status: "active" };
      case "newAnswer":
        const question = state.questions.at(state.index);
        console.log(action.payload);
        return {
          ...state,
          answer: action.payload, //reciever  index that we clicked on , the answer
          points:
            //! checking recieved index we clicked on if it egale to the right answer if so we add points
            action.payload === question.correctOption
              ? state.points + question.points
              : state.points,
        };
      default:
        throw new Error("action uknown");
    }
  }
  const [{ questions, status, index, errorM, answer, points }, dispatch] =
    useReducer(reducer, initialState);

  const numQuestion = questions.length;
  useEffect(() => {
    async function Fetch() {
      try {
        const res = await fetch("http://localhost:9000/questions");
        if (!res.ok) throw new Error("we couldnt fetch the Data");

        const data = await res.json();
        dispatch({ type: "dataRecieved", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed", payload: err.message });
      }
    }
    Fetch();
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error errorM={errorM} />}
        {status === "ready" && (
          <StartScreen numQuestion={numQuestion} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Questions
            question={questions[index]}
            answer={answer}
            dispatch={dispatch}
            points={points}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
