
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { STORE_ACTIONS } from './actions';

const initState = {

}

export const dataReducer = (state = initState, action ) => {
    switch(action.type){
        case(STORE_ACTIONS.UPDATE_BUDGET_LIST):
            return {...state, budgetList: action.budgetList}
        default:
            return state
    }
}

let store = createStore(dataReducer, applyMiddleware(thunk, createLogger()));

export default store;