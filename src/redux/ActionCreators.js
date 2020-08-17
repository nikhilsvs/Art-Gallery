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
    fetch(baseUrl + 'paintings')
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

export const logoutRequest = () =>({
    type:ActionTypes.LOGOUT_REQUEST
});
export const logoutSuccess = () =>({
    type:ActionTypes.LOGOUT_SUCCESS
});
export const logoutUser = () =>(dispatch) =>{
    dispatch(logoutRequest());
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(logoutSuccess());
}


export const signupUser = (creds) => (dispatch) =>{

    return fetch(baseUrl + 'users/signup',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(creds)
    })
    .then((response)=>{
        if(response.ok){
            return response;
        }
        else{
            var err = new Error("Signup Error :" + response.status);
            err.response = response;
            throw err;
        }
    },error => {throw error;})
    .then((response)=>response.json())
    .then((response)=>{
        if(response.success){
            alert("You have been Successfully Registered !!");
        }
        else{
            var err = new Error("Error : " + response.status);
            err.response = response;
            throw err;
        }
    })
    .catch((error)=> {
        alert("You Not have been Successfully Registered !!" + error.message);
    })

}

export const galleryLoading = ()=>({
    type:ActionTypes.GALLERY_LOADING
});
export const addGallery = (items)=>({
    type:ActionTypes.GALLERY_SUCCESS,
    payload:items
});
export const galleryFailed = (errmess) =>({
    type:ActionTypes.GALLERY_FAILED,
    payload:errmess
});
export const fetchGallery = (dispatch) => (dispatch)=>{
    dispatch(galleryLoading(true));
    fetch(baseUrl + 'gallery',{
        headers:{
            'Origin':'http://localhost:3000'
        }
    })
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
    .then((items)=>dispatch(addGallery(items)))
    .catch((error)=>dispatch(galleryFailed(error.message)))
}
export const addGallery = (newGallery)=>({
    type:ActionTypes.ADD_NEW_GALLERY,
    payload:newGallery
})
export const postGallery = (items) => (dispatch)=>{
    fetch(baseUrl + 'gallery',{
        method:'POST',
        headers:{
            'Origin':'http://localhost:3000',
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem('token')
        },
        body:JSON.stringify(items)
    })
    .then((response)=>{
        if(response.ok){
            return response;
        }
        else{
            var err = new Error('Error ' + response.status + response.statusText);
            err.response = response;
        }
    },error=> {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then((response)=>response.json())
    .then((newGallery) => dispatch(addGallery(newGallery)))
    .catch((error)=>dispatch(addGalleryFailed(error.message)))
}