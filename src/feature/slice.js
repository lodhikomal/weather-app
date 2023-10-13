import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const createCity = createAsyncThunk("city", async (data) => {
  try {
    let res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${process.env.REACT_APP_WEATHERAPI_KEY}&units=metric`
    );
    return res.data;
  } catch (error) {
    return error.message;
  }
});
export const slice = createSlice({
  name: "userDetails",
  initialState: {
    weather: {},
    loading: false,
    error: null,
    status: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCity.fulfilled, (state, action) => {
        if (action.payload == "Request failed with status code 404") {
          state.status = action.payload;
        } else {
          state.status = "success";
          state.weather = action.payload;
        }
      })
      .addCase(createCity.rejected, (state, action) => {
        console.log(action.payload, " error");
      });
  },
});

export default slice.reducer;
