import { FC, ReactNode, useContext } from "react";
import cn from "classnames";
import { Image } from "../image";
import { ProductDescription } from "../product-description";
import { ThemeContext } from "../../providers/theme-provider";

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
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={cn(styles["product"], {
        [styles["product-light"]]: themeContext.theme === "light",
      })}
    >
      <Image src={src} alt={title}></Image>
      <ProductDescription>
        <h4>{title}</h4>
        <p>{description}</p>
        <h5>$ {price}</h5>
      </ProductDescription>
    </div>
  );
};
