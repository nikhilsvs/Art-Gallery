import * as ActionTypes from './ActionTypes';
import {Paintings} from '../shared/paintings';
import {baseUrl} from '../baseUrl';

export const paintingsLoading = () =>({
    type:ActionTypes.PAINT_LOADING
});
export const addPaintings = (items) => ({
    type:ActionTypes.ADD_PAINTINGS,
    payload:items
});
export const paintingsFailed = (errmess) =>({
    type:ActionTypes.PAINT_FAILED,
    payload:errmess
})
export const fetchPaintings = ()=>(dispatch)=>{
    dispatch(paintingsLoading(true));
    fetch(baseUrl + 'exhibitions')
    .then((response)=>{
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        
    },
    error=> {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then((response)=>response.json())
    .then((items) => dispatch(addPaintings(items)))
    .catch(error => dispatch(paintingsFailed(error.message)));
    
} 

export const loginRequest = (creds) =>({
    type:ActionTypes.LOGIN_REQUEST,
    payload:creds
});
export const loginSuccess = (response) =>({
    type:ActionTypes.LOGIN_SUCCESS,
    token:response.token
});
export const loginError = (errmess) =>({
    type:ActionTypes.LOGIN_FAILED,
    payload:errmess
});
export const loginUser = (creds) =>(dispatch)=>{
    dispatch(loginRequest(creds));

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then((response)=>{
        if(response.ok){
            return response;
        }
        else{
            var err = new Error("Error : " + response.status + "  " + response.statusText);
            err.response = response;
            throw err;
        }
    },
    error => {
        throw error 
    })
    .then((response)=>response.json())
    .then((response) =>{
        if(response.success){
            localStorage.setItem('token',response.token);
            localStorage.setItem('creds',JSON.stringify(creds));
            dispatch(loginSuccess(response));
        }
        else{
            var err = new Error("Error : " + response.status);
            err.response = response;
            throw err;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
}