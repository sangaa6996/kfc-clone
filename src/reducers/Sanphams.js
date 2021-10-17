import * as Types from '../constants/ActionTypes'


var initialState = [];


const sanphams = (state = initialState, action) => {
    switch(action.type){
        case Types.LayDuLieu:
            state = action.sanphams;
            return [...state];
        default: return [...state];
    }
};



export default sanphams;