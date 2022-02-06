import { CHANGE_ID } from "../actions/action";

export default function reducer(state = [], action) {
  switch (action.type) {
    case CHANGE_ID:
      return {
        ...state,
        id: action.id
      };
    default:
      return state;
  }
}