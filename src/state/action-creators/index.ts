import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../action-interfaces';

export const searchReporistories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        },
      );

      const packages = data.objects.map((obj: any) => obj.package.name);
      dispatch({
        type: ActionType.SUCCESS,
        payload: packages,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.ERROR,
        payload: err.message,
      });
    }
  };
};
