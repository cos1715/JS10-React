import { useState } from "react";
import styles from "./list.module.css";

export const MY_VAR = 3;
export class MyClass {}
export const List = () => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  console.log(styles);

  return (
    <>
      <ul className={styles["list"]}>
        {arr.map((elem, index) => (
          <li
            key={`${index}-${elem}`}
            onClick={() => {
              const filteredArr = arr.filter((el) => el !== elem);
              setArr(filteredArr);
            }}
          >
            {elem}
          </li>
        ))}
      </ul>
      <button onClick={() => setArr([...arr, arr.length])}>add</button>
    </>
  );
};

export default List;
