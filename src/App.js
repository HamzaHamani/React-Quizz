import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
function App() {
  const initialState = {
    questions: [],

    //loding erro  ready active finished
    status: "loading",
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
        };
      default:
        throw new Error("action uknown");
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function Fetch() {
      try {
        const res = await fetch("http://localhost:9000/questions");
        const data = await res.json();
        dispatch({ type: "dataRecieved", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    Fetch();
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  );
}

export default App;
