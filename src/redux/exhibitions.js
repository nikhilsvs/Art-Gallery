import * as ActionTypes from './ActionTypes';

export const Exhibitions = (state={
    isLoading:false,
    exhibitions:[],
    err:null
},action) =>{
    switch(action.type){
        case ActionTypes.EXHIBITIONS_LOADING:
            return{...state,isLoading:true,exhihibitions:[],err:null};

        case ActionTypes.ADD_EXHIBITIONS:
            return{...state,isLoading:false,exhibitions:action.payload,err:null};

        case ActionTypes.EXHIBITIONS_FAILED:
            return{...state,isLoading:false,exhibitions:[],err:action.payload};

        default:
            return state;
    }
}