import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isLoggedIn: false,
    isLoading: false,
  },
  extraReducers: (builder) =>
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    }),
});

export default authSlice.reducer;
