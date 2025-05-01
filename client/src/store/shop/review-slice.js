import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  reviews: [],
  error: null,
};

// Async thunk to add a review
export const addReview = createAsyncThunk(
  "review/addReview",
  async (formdata, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth?.userToken; // Ensure token exists
      const response = await axios.post(
        "http://localhost:3000/api/shop/review/add",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in headers
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// Async thunk to fetch reviews
export const getReviews = createAsyncThunk(
  "review/getReviews",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/shop/review/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch reviews");
    }
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add Review Cases
      .addCase(addReview.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews.push(action.payload);
      })
      .addCase(addReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Get Reviews Cases
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload.data;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default reviewSlice.reducer;
