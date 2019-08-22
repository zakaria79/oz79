import {FETCH_USER} from './../actionTypes';

const initialState = {
  login: 'anonymous',
  isLoggedIn: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {...state, reducer: 'ok from reducer'};
    default:
      return state;
  }
};

export default user;
