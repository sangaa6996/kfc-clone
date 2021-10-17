import axios from 'axios';
import * as Config from '../constants/config';


export default function callAPI(endPoint, method = 'GET', body){
    return axios({
        method : method,
        url : `${Config.API_URL}/${endPoint}`,
        data : body
    }).catch(err => {
        console.log(err);
    });
};