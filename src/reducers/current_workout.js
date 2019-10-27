import * as types from '../actions/types';

export default (state = [], action) => {
    switch(action.type){
        case types.FETCH_CURRENT_WORKOUT_COMPLETE:
            return action.payload;
        case types.ADD_EXERCISE_COMPLETE:
            return [...state, action.payload];
        default:
            return state;        

    }

}