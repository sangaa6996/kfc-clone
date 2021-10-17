import { combineReducers } from 'redux'
import sanphams from './Sanphams';
import user from './User';

const appReducers = combineReducers ({
    sanphams,
    user
});

export default appReducers;