import * as actionTypes from '../actions/actionTypes';

const initialState = {
    count: 0
};

const addCounter = (state, action) => {
    return { 
        ...state,
        count: state.count + 1
    };
};

const subCounter = (state, action) => {
    return { 
        ...state,
        count: state.count - 1
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_COUNTER: return addCounter(state, action);
        case actionTypes.SUB_COUNTER: return subCounter(state, action);
        default: return state;
    }
};

export default reducer;