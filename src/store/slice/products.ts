import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";
import { IStore } from "../types";

const initialState: IStore["products"] = {
  productsList: { loading: false, data: null, error: null },
  product: { loading: false, data: null, error: null },
};

// створюєм асинхронний екшен
export const fetchProductsList = createAsyncThunk(
  // тип екшена
  "productsList/fetch",
  // функція для обробки асинк коду
  async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();

    // якщо функція не викидає помилку то стан завжди буде fulfilled
    if (!resp.ok) {
      throw "Error";
    }
    return data;
  }
);

export const fetchProduct = createAsyncThunk<any, number>(
  "product/fetch",
  async (id) => {
    const resp = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await resp.json();

    if (!resp.ok) {
      throw "Error";
    }
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  // для фсинк екшенів треба спеціальний builder
  extraReducers: (builder) => {
    builder
      // чейним кожен екшен
      // !Увага чейним не саму назву екшена а його стан
      .addCase(fetchProductsList.pending, (state) => {
        state.productsList.loading = true;
      })
      .addCase(fetchProductsList.fulfilled, (state, action) => {
        state.productsList.loading = false;
        state.productsList.data = action.payload;
      })
      .addCase(fetchProductsList.rejected, (state, action) => {
        state.productsList.loading = false;
        state.productsList.error = action.error;
      })
      .addCase(fetchProduct.pending, (state) => {
        state.product.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product.loading = false;
        state.product.data = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.product.loading = false;
        state.product.error = action.error;
      });
  },
});

export const productsReducer = productsSlice.reducer;

export const useProductsListSelector = () => {
  return useAppSelector((state) => state.products.productsList);
};

export const useProductSelector = () => {
  return useAppSelector((state) => state.products.product);
};
