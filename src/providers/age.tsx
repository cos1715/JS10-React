import { ReactNode, createContext, useState } from "react";

interface IAgeContext {
  age: number;
  setAge: (arg: number) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const Age = createContext<IAgeContext>({ age: 0, setAge: () => {} });

interface IAgeProvider {
  children: ReactNode;
}

export const AgeProvider = ({ children }: IAgeProvider) => {
  const [age, setAge] = useState<number>(0);

  return <Age.Provider value={{ age, setAge }}>{children}</Age.Provider>;
};
