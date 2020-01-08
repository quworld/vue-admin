import axios from '../axios';
import User from './user';

const apis = {...User};
const request = {};

for (let [key, value] of Object.entries(apis)) {
    request[key] = function(params) {
        const defaults = {
            method:'POST'
        };
        return axios({...defaults, ...value, ...params});
    }
}
export default request;