// // authThunks.js
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }, thunkAPI) => {
//   try {
//     const res = await axios.post("http://localhost:8800/signin", { email, password });
//     return res.data.user;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
//   }
// });

// export const signupUser = createAsyncThunk("auth/signupUser", async ({ email, password }, thunkAPI) => {
//   try {
//     const res = await axios.post("http://localhost:8800/signup", { email, password });
//     return res.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response?.data?.message || "Signup failed");
//   }
// });