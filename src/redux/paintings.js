import * as ActionTypes from './ActionTypes';

export const Paintings = (state = {
    isLoading:true,
    paintings : [],
    err : null
},action)=>{
    switch(action.type){
        case ActionTypes.ADD_PAINTINGS:
            return{...state,isLoading:false,err:null,paintings:action.payload}

        case ActionTypes.PAINT_LOADING:
            return {...state,isLoading:true,err:null,paintings:[]}

        case ActionTypes.PAINT_FAILED:
            return {...state,isLoading:false,err:action.payload,paintings:[]}
        

        default : return state;
    }
}