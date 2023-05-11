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

// Компонент обгортка яка дозволяє поілитись логікою
const Counter = ({ children, renderProps }: ICounter) => {
  const [count, setCount] = useState(0);

  const onCountUpdate = () => {
    setCount(count + 1);
  };

  // Викликаємо функцію і пердаєм їй аргументи
  const myJsx = renderProps(count, onCountUpdate);

  // Використовуємо результат функції
  return <div>{myJsx}</div>;
};

export const RenderProps = () => {
  // Звичайна функція яка повертає JSX
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
      {/* Передаєм цю функцію як children або як props */}
      <Counter renderProps={renderProps}>{renderProps}</Counter>
    </div>
  );
};
