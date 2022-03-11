import {combineReducers} from '@reduxjs/toolkit'
import user from "./models/user.reducer"


const rootReducer = combineReducers({
    user
});

export default rootReducer;
