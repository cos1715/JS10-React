import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "store/actions/productsAction";
import { useProductSelector } from "store/selectors/productsSelector";
import { TThunkDispatch } from "store/types";

export const Products = () => {
  const dispatch = useDispatch<TThunkDispatch>();
  const products = useProductSelector();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};
