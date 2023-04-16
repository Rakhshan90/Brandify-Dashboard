import { loginFailure, loginStart, loginSucces } from "./userRedux"
import { publicRequest, userRequest } from '../requestMethods';
import { deleteProductFail, deleteProductStart, deleteProductSuccess, getProductFail, getProductStart, getProductSuccess } from "./productRedux";

export const login = async(dispatch, user)=>{
    dispatch(loginStart())
    try{
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSucces(res.data))
    }catch(err){
        dispatch(loginFailure());
    }
};
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
        // const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id))
    }catch(err){
        dispatch(deleteProductFail());
    }
};