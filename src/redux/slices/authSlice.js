import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (data, thunkAPI) => {
    try {
      const response = await api.signIn(data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (data, thunkAPI) => {
    try {
      const response = await api.signUp(data);
      return response.data;
    } catch (error) {
      return error.response;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
  },
  reducers: {
    logOut: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});
export const { logOut } = authSlice.actions;
export default authSlice.reducer;
