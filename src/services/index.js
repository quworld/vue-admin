import axios from '../axios';
import User from './user';
import List from './list';

const apis = {...User,...List};
const request = {};

for (let [key, value] of Object.entries(apis)) {
    request[key] = (params)=> {
        const defaults = {
            method:'POST'
        };
        return axios({...defaults, ...value, ...params});
    }
}
export default request;