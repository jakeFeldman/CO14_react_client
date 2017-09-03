import * as types from '../actions/action_types';

const INITIAL_STATE = {
  isFetching: false,
  isReceived: false,
  profile: [],
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ACCOUNT_PROFILE_REQUEST:
      return { ...state, isFetching: true }
    case types.ACCOUNT_PROFILE_RECEIVED:
      return { ...state, isFetching: false, isReceived: true, profile: action.payload }
    case types.ACCOUNT_PROFILE_ERROR:
      return { ...state, isFetching: false, error: action.payload }
    default:
      return state;
  }
};
