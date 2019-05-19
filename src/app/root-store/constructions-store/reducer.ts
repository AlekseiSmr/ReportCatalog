import { Actions, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';

export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.CONSTRUCTIONS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case ActionTypes.CONSTRUCTIONS_SUCCESS: {
      return featureAdapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null,
      });
    }
    case ActionTypes.CONSTRUCTIONS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }

    default: {
      return state;
    }
  }
}
