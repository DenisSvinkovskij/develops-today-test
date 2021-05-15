import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";
import {composeWithDevTools} from 'redux-devtools-extension'
import {createWrapper, Context} from 'next-redux-wrapper';


export const makeStore = (context: Context) => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export const wrapper =  createWrapper(makeStore, {debug: true});