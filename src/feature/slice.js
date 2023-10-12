import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const createCity = createAsyncThunk("city", async (data) => {
  let res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${process.env.REACT_APP_WEATHERAPI_KEY}`
  );
  return res.data;
});
export const slice = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCity.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload, "checked");
        state.users = action.payload;
      })
      .addCase(createCity.rejected, (state, action) => {
        state.status = "failed";
        state.users = action.payload;
      });
  },
});
export default slice.reducer;
