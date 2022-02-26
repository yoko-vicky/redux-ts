interface State {
  loading: boolean;
  error: string | null;
  data: string[];
}

enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SUCCESS = 'search_repositories_success',
  ERROR = 'search_repositories_error',
}

interface SearchRepostoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SuccessAction {
  type: ActionType.SUCCESS;
  payload: string[];
}

interface ErrorAction {
  type: ActionType.ERROR;
  payload: string;
}

type Action = SearchRepostoriesAction | SuccessAction | ErrorAction;

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
