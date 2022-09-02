import  {
    onFail,
    onSuccess,
    onClear,
} from './actions';
import {stateDefault} from './initialState'

export const reducerDefault = (state = stateDefault, action, Action) => {
    console.log("Dong 9 reducer", state)
    switch (action.type) {
        case Action:
            return { ...state, isLoading: true };
        case onSuccess(Action):
            return { data: action.data, isLoading: false};
        case onFail(Action):
            return { ...state, isLoading: false};
        case onClear(Action):
            return stateDefault;
        default:
            return state;
    }
};
