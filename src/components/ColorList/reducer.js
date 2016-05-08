import {REFRESH_LIST, RECEIVE_COLORS, REQUEST_COLORS} from './actions'

const initialState = {
  colors: []
};

export default function list(state = initialState, action) {
  switch(action.type){

    case RECEIVE_COLORS:
      console.log(RECEIVE_COLORS, {action, state})
      return Object.assign({}, state, action);
      break;

    case REQUEST_COLORS:
      console.log(REQUEST_COLORS, {action, state})
      return state;
      break;

    default:
      return state;
  }
}
