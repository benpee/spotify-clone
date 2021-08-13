import { createContext, useReducer, useContext } from 'react';
import { initialState, reducer } from './reducer';

export const StateContext = createContext();

// const initialState = {
//     user: null,
//     playlists: [],
//     playing: false,
//     item: null
// }
// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'SET_USER':
//             return {
//                 ...state,
//                 user: action.user
//             }
//         default:
//             return state;
//     }
// }


export const StateProvider = (props) => {
    return <StateContext.Provider value={useReducer(reducer, initialState)}>
        {props.children}
    </StateContext.Provider>
}

export const useStateProvider = () => useContext(StateContext);