import { ReactNode, useState } from "react";

interface IButton {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: IButton) => {
  return <button onClick={onClick}>{title}</button>;
};

interface ICounter {
  children: (count: number, onCountUpdate: () => void) => ReactNode;
  renderProps: (count: number, onCountUpdate: () => void) => ReactNode;
}

const Counter = ({ children, renderProps }: ICounter) => {
  const [count, setCount] = useState(0);

  const onCountUpdate = () => {
    setCount(count + 1);
  };

  const myJsx = renderProps(count, onCountUpdate);

  return <div>{myJsx}</div>;
};

export const RenderProps = () => {
  const renderProps: ICounter["children"] = (count, onCountUpdate) => {
    return (
      <>
        <p>Count: {count}</p>
        <Button title="Increase Count" onClick={onCountUpdate} />
      </>
    );
  };

  return (
    <div>
      <Counter renderProps={renderProps}>{renderProps}</Counter>
    </div>
  );
};
