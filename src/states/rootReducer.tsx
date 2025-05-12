import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './reducers/useSlice'
const rootReducer = combineReducers({
    user:userReducer,
});

export default rootReducer;