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

interface IProductItem {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}
const className = "dsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfds";
const transformText = (str: string) => {
  return str.toUpperCase();
};

export const Product: FC<IProduct> = ({ children }) => {
  const [lightTheme, setLightTheme] = useState<boolean>();
  const [product, setProduct] = useState<IProductItem>();

  let calc = 1;
  calc = Math.random();

  useEffect(() => {
    const loadProduct = async () => {
      const id = Math.floor(Math.random() * 10) + 1;
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };

    loadProduct();
    console.log("lightTheme effect", lightTheme);

    return () => {
      console.log("lightTheme cleanup", lightTheme);
    };
  }, [lightTheme]);

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
      <Image src={product?.thumbnail} alt={product?.title}></Image>
      <ProductDescription>
        {product ? (
          <>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <h5>$ {product.price}</h5>
          </>
        ) : (
          <p>Loading...{calc}</p>
        )}
      </ProductDescription>
    </div>
  );
};
