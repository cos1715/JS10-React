import { useEffect } from "react";
import { useAppDispatch } from "store/hooks";
import {
  useProductsListSelector,
  useProductSelector,
  fetchProductsList,
  fetchProduct,
} from "store/slice/products";

export const Products = () => {
  const dispatch = useAppDispatch();
  const productsList = useProductsListSelector();
  const product = useProductSelector();

  useEffect(() => {
    dispatch(fetchProductsList());
    dispatch(fetchProduct(1342323));
  }, [dispatch]);

  // console.log(products);

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};
