import * as actionTypes from './actionTypes';
import { worksContents } from '../../assets/WorksContents/worksContents';

export const getWroksContents = () => {
    return {
        type: actionTypes.GET_WORKS_CONTETS,
        contents: worksContents
    };
};