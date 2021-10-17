import * as Types from '../constants/ActionTypes'


var initialState = null;


const user = (state = initialState, action) => {
    switch(action.type){
        case Types.SetUser:
            console.log(action.user)
            return action.user;
        default: return state;
    }
};



export default user;