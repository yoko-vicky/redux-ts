import { ActionType } from '../action-types';
import { Action } from '../actions';

interface State {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
