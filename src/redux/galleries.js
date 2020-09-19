import * as ActionTypes from './ActionTypes';

export const Galleries = (state={
    isLoading:true,
    galleries:[],
    err:null
},action)=>{

    switch(action.type){
        case ActionTypes.GALLERY_LOADING:
            return {...state,isLoading:true,galleries:[],err:null};

        case ActionTypes.GALLERY_SUCCESS:
            return {...state,isLoading:false,galleries:action.payload,err:null};

        case ActionTypes.GALLERY_FAILED:
            return {...state,isLoading:false,galleries:[],err:action.errmess};

        case ActionTypes.ADD_NEW_GALLERY:
            return {...state,isLoading:false,galleries:state.galleries.push(action.payload),err:null}

        default:
            return state;
    }

}