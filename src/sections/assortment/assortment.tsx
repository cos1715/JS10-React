import { useEffect, useState, useTransition } from "react";
import { Product, IProduct, IProductItem } from "../../components/product";
import viteLogo from "/vite.svg";
import reactLogo from "../../assets/react.svg";

import styles from "./styles.module.scss";

const useFetchProducts = () => {
  const [products, setProducts] = useState<undefined | IProductItem[]>();
  const ids: number[] = [];
  for (let i = 0; i < 4; i++) {
    const id = Math.floor(Math.random() * 10) + 1;
    ids.push(id);
  }

  useEffect(() => {
    const promises: Promise<Response>[] = [];
    for (let i = 0; i < 4; i++) {
      promises.push(fetch(`https://dummyjson.com/products/${ids[i]}`));
    }
    Promise.all(promises)
      .then((res) => Promise.all(res.map((promise) => promise.json())))
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return products;
};

export const Assortment = () => {
  const products = useFetchProducts();
  console.log("products", products);

  return (
    <div className={styles["container"]}>
      {products ? (
        products.map((item, index) => (
          <Product
            key={index}
            description={item.description}
            price={item.price}
            title={item.title}
            src={item.thumbnail}
            // unique
          ></Product>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
