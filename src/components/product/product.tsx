import { FC } from "react";

export interface IProduct {
  src: string;
  title: string;
  description: string;
  price: number;
}

export const Product: FC<IProduct> = ({ description, price, title, src }) => {
  return (
    <div>
      <img src={src} />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <h5>$ {price}</h5>
      </div>
    </div>
  );
};
