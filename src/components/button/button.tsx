interface IButton {
  title: string;
  disabled: boolean;
  onClick: () => void;
}

export const Button = ({ title, disabled, onClick }: IButton) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {title}
    </button>
  );
};
