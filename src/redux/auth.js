import * as ActionTypes from './ActionTypes';

export const auth = (state={
    isLoading:false,
    isAuthenticated:localStorage.getItem('token')?true:false,
    token:localStorage.getItem('token'),
    user:localStorage.getItem('creds')?JSON.parse(localStorage.getItem('creds')):null,
    errmess:null
},action) =>{
    switch(action.type){
        case ActionTypes.LOGIN_REQUEST:
            return {...state,isLoading:true,user:action.payload,errmess:null,
                    isAuthenticated:false};

        case ActionTypes.LOGIN_SUCCESS:
            return {...state,isLoading:false,isAuthenticated:true,token:action.token,
                    errmess:null};

        case ActionTypes.LOGIN_FAILED:
            return{...state,isLoading:false,isAuthenticated:false,
                        errmess:action.payload};

        case ActionTypes.LOGOUT_REQUEST:
            return {...state,isLoading:true,isAuthenticated:true};

        case ActionTypes.LOGOUT_SUCCESS:
            return {...state,isLoading:false,isAuthenticated:false,token:'',user:null};

        default : return state;
    }
}