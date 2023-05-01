import { memo } from "react";

interface IButton {
  onClick: () => void;
}

const Button = ({ onClick }: IButton) => {
  console.log("Button render");

  return <button onClick={onClick}>Click</button>;
};

// memo is used to memoize component
// if props will be the same component won't be rerendered
export const ButtonMemo = memo(Button);
