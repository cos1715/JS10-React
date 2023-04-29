import { memo } from "react";

export const InputValue = memo(({ data }: { data: { value: string } }) => {
  console.log("render");

  return <p>Input value: {data.value}</p>;
});
