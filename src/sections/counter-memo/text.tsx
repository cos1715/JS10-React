import { memo } from "react";

// memo is used to memoize component
// if props will be the same component won't be rerendered
export const InputValue = memo(({ data }: { data: { value: string } }) => {
  console.log("InputValue render");

  return <p>Input value: {data.value}</p>;
});
