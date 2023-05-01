import { useState, useCallback, useMemo } from "react";
import { ButtonMemo } from "./button";
import { InputValue } from "./text";

// useCallback and memo example
// useCallback returns a function
// useMemo returns a value
export const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  // during rerender all vars will be reinitialized
  // so in js logic onClick will different each time
  // in result it will rerender button on state update
  // to avoid this use memoization
  // save update function in useCallback
  // this will help react to understand that update function is always the same
  const onClick = useCallback(() => {
    const updateState = (prevState: number) => {
      return prevState + 1;
    };
    // instead of passing new value
    // you can pass function that receives prevState
    setCount(updateState);
  }, []);

  // you can use useMemo to save value
  // same logic applies to useMemo
  const data = useMemo(() => ({ value }), [value]);

  return (
    <div>
      <p>count: {count}</p>
      <ButtonMemo onClick={onClick} />
      <br />
      <br />
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <InputValue data={data} />
    </div>
  );
};
