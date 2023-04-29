import { useState, useCallback, useMemo } from "react";
import { ButtonMemo } from "./button";
import { InputValue } from "./text";

// useCallback and memo example
// save update function in useCallback
// this will help react to understand that update function is always the same
// in result will rerender button on state update
// you can use useMemo to save value
export const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const onClick = useCallback(() => {
    const updateState = (prevState: number) => {
      return prevState + 1;
    };
    setCount(updateState);
  }, []);

  const data = useMemo(() => ({ value }), [value]);

  return (
    <>
      <p>count: {count}</p>
      <ButtonMemo onClick={onClick} />
      <br />
      <br />
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <InputValue data={data} />
    </>
  );
};
