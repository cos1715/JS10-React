import { memo } from "react";

interface IButton {
  onClick: () => void;
}

const Button = ({ onClick }: IButton) => {
  console.log("render");

  return <button onClick={onClick}>Click</button>;
};

export const ButtonMemo = memo(Button);
