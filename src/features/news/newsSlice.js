import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { openModal } from "../modal/modalSlice";
import {newsApiKey,baseUrl,newsType, newsQueryType,sortBy} from '../../config/new_config';

const url = `https://newsapi.org/v2/everything?q=${newsQueryType.apple}&sortBy=${sortBy}&apiKey=${newsApiKey}`;
console.log(url)
const initialState = {
  articles: [],
  status: 'ok',
  totalNews: 0,
  isLoading: true,
};

//Fetch
// export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// });

//Axios
// ThunkAPI can get the state of the APP and access andinvoke functions on the state
export const getNews = createAsyncThunk(
  "news/getNews",
  async (name, thunkAPI) => {
    try {
      //   console.log(name);
      //   console.log(thunkAPI);
      //   thunkAPI.dispatch(openModal());
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearCart: (state) => {
        state.cartItems = [];
      }
  },
  extraReducers: {
    [getNews.pending]: (state) => {
      state.isLoading = true;
    },
    [getNews.fulfilled]: (state, action) => {
        console.log(action);
        state.articles = action.payload.articles;
        state.totalNews=action.payload.totalResults;
      
    },
    [getNews.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

//console.log(cartSlice);
export const { clearCart} =newsSlice.actions;
export default newsSlice.reducer;
