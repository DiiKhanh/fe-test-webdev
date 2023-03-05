import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "../../api";
const initialState = {
  products: [],
  product: {},
};

export const fetchAllProduct = createAsyncThunk(
  "product/fetch",
  async (data, thunkAPI) => {
    try {
      const response = await api.getAllProducts();
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id, thunkAPI) => {
    try {
      const response = await api.getProduct(id);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/add",
  async (info, thunkAPI) => {
    try {
      const { data, token } = info;
      const res = await api.addProduct(data, token);
      console.log(res);
    } catch (error) {
      return error;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (id, thunkAPI) => {
    try {
      const res = await api.deleteProduct(id);
      console.log(res);
    } catch (error) {
      return error;
    }
  }
);
export const updateProduct = createAsyncThunk(
  "product/update",
  async (data, thunkAPI) => {
    const { id, name } = data;
    try {
      const res = await api.updateProduct(id, name);
      console.log(res);
    } catch (error) {
      return error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      });
  },
});

export default productSlice.reducer;
