import { Product, IProduct } from "../../components/product";
import viteLogo from "/vite.svg";
import reactLogo from "../../assets/react.svg";

import styles from "./styles.module.scss";

const config: IProduct[] = [
  {
    src: viteLogo,
    title: "Sourdough Loaf",
    description: "Sample text, consectetur adipiscing.",
    price: 4.65,
  },
  {
    src: reactLogo,
    title: "Baguette",
    description: "Small-batch sourdough baguette.",
    price: 3.05,
  },
  {
    src: viteLogo,
    title: "Farmers Loaf",
    description: "Slow-fermented sourdough Rye studded with Kalamata.",
    price: 5.5,
  },
  {
    src: reactLogo,
    title: "Round Bread",
    description: "Made with 100% whole grain flour and high in fiber.",
    price: 5.15,
  },
];

export const Assortment = () => {
  console.log(styles);

  return (
    <div className={styles["container"]}>
      {config.map((item, index) => (
        <Product
          key={index}
          description={item.description}
          price={item.price}
          title={item.title}
          src={item.src}
          // unique
        ></Product>
      ))}
    </div>
  );
};
