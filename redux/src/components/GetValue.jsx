import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByTen } from "../redux/features/counterSlice";

const GetValue = () => {
  const data = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      data
      <p>{data}</p>
      <button onClick={() => dispatch(incrementByTen(10))}>
        increment by 10
      </button>
    </div>
  );
};

export default GetValue;
