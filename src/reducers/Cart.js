import * as Types from '../constants/ActionTypes'


var initialState = getCookie('MonAn');

var getCookie=(name)=>{
    // Split cookie string and get all individual name=value pairs in an array
    if(document.cookie==="")
    this.setCookie(name,[])
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return JSON.parse(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}
var setCookie=(name,value)=>{
    document.cookie=`${name}=${JSON.stringify(value)}`
}

const user = (state = initialState, action) => {
    switch(action.type){
        case Types.SetUser:
            return action.user;
        default: return state;
    }
};



export default user;