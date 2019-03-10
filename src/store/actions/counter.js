import * as actionTypes from './actionTypes';

export const addCounter = () => {
    return { 
        type: actionTypes.ADD_COUNTER 
    };
};

export const subCounter = () => {
    return {
        type: actionTypes.SUB_COUNTER
    };
};