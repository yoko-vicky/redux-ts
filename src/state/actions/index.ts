import { ActionType } from '../action-types';

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

export type Action = SearchRepostoriesAction | SuccessAction | ErrorAction;
