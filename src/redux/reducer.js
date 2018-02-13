import { FILTERING } from './actions';

const initialState = {
  filterText: ''
}

export function contactReducer(state = initialState, actions) {
  if(actions.type === FILTERING) {
    return{
      filterText: actions.searchItem // access searchItem in reducer by the key ('searchItem')
    }
  }
  return state;
}
