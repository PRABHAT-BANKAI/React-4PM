import { useReducer, useState } from "react";

function App() {
  const intialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, intialState);

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 1,
        };
      case "decrement":
        return {
          count: state.count - 1,
        };
      default:
        return state;
    }
  }

  return (
    <>
      <div>
        <p>count :{state.count}</p>
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          decrement
        </button>
      </div>
    </>
  );
}

export default App;
