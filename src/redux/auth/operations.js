import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://vocab-builder-backend.p.goit.global/api";

export const registerUser = createAsyncThunk(
  "auth/register",

  async (userInfo, thunkAPI) => {
    console.log(userInfo);

    try {
      const response = await fetch(`${BASE_URL}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(data);
      }

      return data;
    } catch (error) {
      console.error("Виняток:", error);
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);
