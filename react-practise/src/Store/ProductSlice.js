import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  data: [],
  status:'idle'
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state,action)=>{
            state.status='Loading'
        })
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.status='idle'
        })
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.status='error'
        })
    }
  },
);

// ✅ Exporting the action
export const { fetchProduct } = ProductSlice.actions;

// ✅ Exporting the reducer
export default ProductSlice.reducer;

export const getProducts=createAsyncThunk('Product/get',async ()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    return result;
})

