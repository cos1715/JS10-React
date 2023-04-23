import { FC, useState, useEffect } from "react";
import cn from "classnames";
import { Image } from "../image";
import { ProductDescription } from "../product-description";

import styles from "./styles.module.scss";

export interface IProduct {
  src: string;
  title: string;
  description: string;
  price: number;
}

interface IProductItem {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export const Product: FC<IProduct> = ({ description, price, title, src }) => {
  const [lightTheme, setLightTheme] = useState<boolean>(false);
  const [product, setProduct] = useState<IProductItem>();

  useEffect(() => {
    const loadProduct = async () => {
      const id = Math.floor(Math.random() * 10) + 1;
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };

    loadProduct();
  }, []);

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
          <p>Loading...</p>
        )}
      </ProductDescription>
    </div>
  );
};
