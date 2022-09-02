import actions from "../actions";
import { reducerDefault } from "../reducers";

export default function (...props){
    return reducerDefault(...props, actions.GET_ALL_PRODUCTS);
}

