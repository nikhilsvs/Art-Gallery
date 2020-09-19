import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Paintings} from './paintings';
import {Galleries} from './galleries';
import {Exhibitions} from './exhibitions';
import {auth} from './auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            paintings:Paintings,
            auth:auth,
            galleries:Galleries,
            exhibitions:Exhibitions
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}