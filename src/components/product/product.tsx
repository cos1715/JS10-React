import { FC, useState, useEffect, ReactNode } from "react";
import cn from "classnames";
import { Image } from "../image";
import { ProductDescription } from "../product-description";

import styles from "./styles.module.scss";

export interface IProduct {
  src: string;
  title: string;
  description: string;
  price: number;
  unique?: boolean;
  children?: ReactNode;
}

export interface IProductItem {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export const Product: FC<Partial<IProduct>> = ({
  children,
  description,
  price,
  src,
  title,
}) => {
  const [lightTheme, setLightTheme] = useState<boolean>();

  const onClick = () => {
    setLightTheme((prevState) => !prevState);
  };

  return (
    <div
      className={cn(styles["product"], {
        [styles["product-light"]]: lightTheme,
      })}
      onClick={onClick}
    >
      <Image src={src} alt={title}></Image>
      <ProductDescription>
        {true ? (
          <>
            <h4>{title}</h4>
            <p>{description}</p>
            <h5>$ {price}</h5>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </ProductDescription>
    </div>
  );
};
