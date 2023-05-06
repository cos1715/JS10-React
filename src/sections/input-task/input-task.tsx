import { useContext, useState } from "react";
import { Button } from "components/button";
import { Input, IInput } from "components/input";
import { Age } from "providers/age";

const checkAge = (value: string) => {
  return parseInt(value) > 17;
};

export const InputTask = () => {
  const [value, setValue] = useState<string>("");
  const { setAge } = useContext(Age);
  const onChange: IInput["onChange"] = (e) => {
    setValue(e.target.value);
  };
  const onClick = () => {
    setAge(parseInt(value));
  };

  return (
    <div>
      <Input value={value} type="number" onChange={onChange} />
      <Button title="Submit" disabled={!checkAge(value)} onClick={onClick} />
    </div>
  );
};
