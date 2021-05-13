import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import cityRedycer from './cityes/reducer';

const rootReducer = combineReducers({
   city: cityRedycer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;