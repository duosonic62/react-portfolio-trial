import * as actionTypes from '../actions/actionTypes';
const initialState = {
    contents: null
};

const getWorksContetns = (state, action) => {
    console.log(action);
    return { 
        ...state,
        contents: action.contents
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_WORKS_CONTETS: return getWorksContetns(state, action);
        default: return state;
    }
};

export default reducer;