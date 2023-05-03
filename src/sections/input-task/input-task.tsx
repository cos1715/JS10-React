import { useState } from "react";
import { Button } from "components/button";
import { Input, IInput } from "components/input";

const checkAge = (value: string) => {
  return parseInt(value) > 17;
};

export const InputTask = () => {
  const [value, setValue] = useState<string>("");
  const onChange: IInput["onChange"] = (e) => {
    setValue(e.target.value);
  };
  const onClick = () => {};

  console.log(value);

  return (
    <div>
      <Input value={value} type="number" onChange={onChange} />
      <Button title="Submit" disabled={!checkAge(value)} onClick={onClick} />
    </div>
  );
};
