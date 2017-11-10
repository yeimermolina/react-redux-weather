import { FETCH_WEATHER } from '../actions/index';


export default function(state = [], action){
  console.log(action.type)
  console.log(FETCH_WEATHER)
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data] );
      if (action.payload.data){
        return [action.payload.data, ...state];
      }
      return state
  }
  return state
}