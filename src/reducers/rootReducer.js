import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import contactsReducer from "./contacts";
import reduxPromise from 'redux-promise-middleware';

export const rootReducer = combineReducers({
    contacts: contactsReducer
});



const allEnhancers = compose(
    applyMiddleware(reduxPromise, thunk)
);

export const store = createStore(
    rootReducer,
    allEnhancers
);
