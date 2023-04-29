import { useDeferredValue, useEffect, useState } from "react";
import { Product, IProductItem } from "../../components/product";

const useProductsFetch = (query: string) => {
  const [products, setProducts] = useState<IProductItem[]>([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [query]);

  return products;
};

function debounce(func: (...args: any[]) => unknown, timeout = 300) {
  let timer: number;
  return function (this: unknown, ...args: unknown[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export const Search = () => {
  const [query, setQuery] = useState<string>("phone");
  const deferredQuery = useDeferredValue(query);
  const [counter, setCounter] = useState<number>(1);
  const products = useProductsFetch(deferredQuery);

  console.log(query);
  console.log(products);

  const onChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  });

  return (
    <>
      <div>
        <input
          type="text"
          // value={query}
          onChange={onChange}
        />
        <button onClick={() => setCounter(counter + 1)}>click {counter}</button>
      </div>
      <br />
      {products.length ? (
        products.map((product) => {
          return (
            <Product
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              src={product.thumbnail}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
      <br />
      <br />
    </>
  );
};
