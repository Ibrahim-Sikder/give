/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  donate: [],
};
const donateSlice = createSlice({
  name: "donate",
  initialState,
  reducers: {},
});

export default donateSlice.reducer;
