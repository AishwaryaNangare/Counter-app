"use client";
import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const [value, setValue] = useState(1);
  const { count, increment, decrement, reset } = useCounter(0, value);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let InputValue = parseInt(event.target.value);
    setValue(() => (isNaN(InputValue) ? 1 : InputValue));
  };

  return (
    <div className="c-container">
      <label htmlFor="inputValue" className="inputLabel text-3xl">
        Set value to increment or decrement{" "}
      </label>
      <input
        className="setValue"
        name="inputValue"
        placeholder="Enter Value"
        onChange={handleOnChange}
        type="number"
      />

      <h1>
        {count}
      </h1>
      <div className="flex flex-row space-x-2">
        <button className="btn" onClick={increment}>
          Increment
        </button>
        <button className="btn" onClick={decrement}>
          Decrement
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
