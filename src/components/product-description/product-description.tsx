import { FC, ReactNode, useContext } from "react";

interface IProductDescription {
  children: ReactNode;
}

export const ProductDescription: FC<IProductDescription> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      {children}
    </div>
  );
};
