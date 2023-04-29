import { useEffect, useRef, useState, useMemo } from "react";
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
  let timer: NodeJS.Timer;
  return function (this: unknown, ...args: unknown[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const useCustomRef = () => {
  // ref can store value between rerenders
  const inputRef = useRef<HTMLInputElement>(null);
  const randomRef = useRef(Math.random());
  const random = Math.random();

  console.log("random", random);
  console.log("randomRef", randomRef.current);

  return inputRef;
};

export const Search = () => {
  const [query, setQuery] = useState<string>("phone");
  const products = useProductsFetch(query);
  const inputRef = useCustomRef();

  const memo = useMemo(() => {
    return { query };
  }, [query]);

  const memo2 = useMemo(() => {
    return { query };
  }, [memo]);

  useEffect(() => {
    // ref to input element
    // see below how you can get ref
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  });

  return (
    <>
      <div>
        <input
          // you can pass ref prop to element
          // ref gives you reference to this element
          ref={inputRef}
          type="text"
          onChange={onChange}
        />
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
