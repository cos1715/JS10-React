import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";
import { IStore } from "../types";
import { octokit } from "../../App";

const initialState: IStore["profile"] = {
  loading: false,
  data: null,
  error: null,
};

export const fetchUserProfile = createAsyncThunk<any, string>(
  "productsList/fetch",
  async (username) => {
    const resp = await octokit.request(`GET /users/${username}`);

    return resp.data;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = { ...action.payload };
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state) => {
        state.loading = false;
        state.data = null;
        state.error = "Login failed";
      });
  },
});

export const profileReducer = profileSlice.reducer;

export const useProfileSelector = () => {
  return useAppSelector((state) => state.profile);
};
