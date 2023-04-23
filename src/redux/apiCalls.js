import { getUserFail, getUserStart, getUserSuccess, loginFailure, loginStart, loginSucces } from "./userRedux"
import { publicRequest, userRequest } from '../requestMethods';
import { addProductFail, addProductStart, addProductSuccess, deleteProductFail, deleteProductStart, deleteProductSuccess, getProductFail, getProductStart, getProductSuccess, updateProductFail, updateProductStart, updateProductSuccess } from "./productRedux";

export const login = async(dispatch, user)=>{
    dispatch(loginStart())
    try{
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSucces(res.data))
    }catch(err){
        dispatch(loginFailure());
    }
};

//Products
export const getProducts = async(dispatch)=>{
    dispatch(getProductStart())
    try{
        const res = await publicRequest.get('/products');
        dispatch(getProductSuccess(res.data))
    }catch(err){
        dispatch(getProductFail());
    }
};
export const deleteProducts = async(id, dispatch)=>{
    dispatch(deleteProductStart())
    try{
        //to prevent deletion of products from database
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id))
    }catch(err){
        dispatch(deleteProductFail());
    }
};
export const updateProducts = async(id, product, dispatch)=>{
    dispatch(updateProductStart())
    try{
        const res = await userRequest.put(`/products/${id}`, product);
        dispatch(updateProductSuccess({id, product}))
    }catch(err){
        dispatch(updateProductFail());
    }
};
export const addProducts = async(product, dispatch)=>{
    dispatch(addProductStart())
    try{
        const res = await userRequest.post(`/products`, product);
        dispatch(addProductSuccess(res.data))
    }catch(err){
        dispatch(addProductFail());
    }
};

//Users
export const getUsers = async(dispatch)=>{
    dispatch(getUserStart())
    try{
        const res = await userRequest.get('/users')
        dispatch(getUserSuccess(res.data))
    }catch(err){
        dispatch(getUserFail())
    }
}