import axios from '../axios';
import User from './user';
import List from './list';
import Fix  from './fix';

const apis = {...User,...List,...Fix};
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
