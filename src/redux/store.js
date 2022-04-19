import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducers } from './root-reducer'
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(...middlewares))
    )