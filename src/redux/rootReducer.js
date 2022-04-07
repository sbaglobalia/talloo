import { combineReducers } from 'redux';
import userReducer from './Reducer/userReducer';

const rootReducer = combineReducers({
    userInfo: userReducer,
    // if there are other reducers , we can add here one by one
});

export default rootReducer;