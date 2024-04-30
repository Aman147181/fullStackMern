import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ? user : null,
  message: "",
};

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("/api/user/login", userData);
      console.log(response);
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {})
      .addCase(login.fulfilled, (state, action) => {
        
        state.user = action.payload;
        state.message = "User Logged In Successfully";
        toast.success(state.message);
      })
      .addCase(login.rejected, (state, action) => {
        state.message = action.payload;
        state.user = null;
        toast.error(state.message);
      })
      .addCase(logout.fulfilled, (state) => {
       
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
