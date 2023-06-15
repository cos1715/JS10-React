import { sum } from "./App";

jest.mock("./const.ts", () => ({ VITE_ACCESS_TOKEN: "test-value" }));

test("check if 5 > 1", () => {
  // arrange
  const myVar = 5;
  const mySecondVar = 1;
  // act
  const isMoreThen = myVar > mySecondVar;
  //assert
  expect(isMoreThen).not.toBeFalsy();
});

test("check sum func", () => {
  expect(sum(1, 1)).toBe(2);
});
