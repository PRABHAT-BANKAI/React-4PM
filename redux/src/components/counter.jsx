import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, multipicationByAmount } from "../redux/features/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "250px",
          height: "250px",
          border: "1px solid black",
          padding: "100px",
        }}
      >
        <span>{count}</span>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button onClick={()=>dispatch(multipicationByAmount(5))}>Multiplication with 5</button>
        </div>
      </div>
    </div>
  );
}
