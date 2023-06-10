interface IProps {
  title: string;
  onClick?: () => void;
}

export const Button = ({ title, onClick }: IProps) => {
  return <button onClick={onClick}>{title}</button>;
};
