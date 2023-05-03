import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export interface IInput {
  type?: HTMLInputTypeAttribute;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ name, onChange, type = "text", value }: IInput) => {
  return <input type={type} name={name} onChange={onChange} value={value} />;
};
