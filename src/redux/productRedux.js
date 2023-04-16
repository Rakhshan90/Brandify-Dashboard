import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    products: [],
    isFetching: false,
    error: false,
}

const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers: {
        //GET ALL PRODUCTS
        getProductStart: (state)=>{
            state.isFetching = true
            state.error = false
        },
        getProductSuccess: (state, action)=>{
            state.isFetching = false
            state.products = action.payload
        },
        getProductFail: (state)=>{
            state.isFetching = false
            state.error = true
        },
        //DELETE PRODUCT
        deleteProductStart: (state)=>{
            state.isFetching = true
            state.error = false
        },
        deleteProductSuccess: (state, action)=>{
            state.isFetching = false
            state.products.splice(
                state.products.findIndex((item)=>item._id === action.payload), 1
            )
        },
        deleteProductFail: (state)=>{
            state.isFetching = false
            state.error = true
        }
        },
    },
)

export const { 
    getProductStart,
    getProductSuccess,
    getProductFail,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFail
    } = productSlice.actions;
export default productSlice.reducer;