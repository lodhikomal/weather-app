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
    weather: {},
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
        // console.log(action.payload, "checked");
        state.weather = action.payload;
      })
      .addCase(createCity.rejected, (state) => {
        state.status = "failed";
        // state.weather = action.payload;
      });
  },
});

export default slice.reducer;
