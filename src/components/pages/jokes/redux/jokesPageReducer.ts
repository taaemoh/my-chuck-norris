import * as actionTypes from '../../../../typescript/actions';
import { jokesReducer } from '../../../../typescript/mainTypes';

const initialState: jokesReducer = {
    jokeList: [],
    isLoading: false,
    isLoadingFavorite: false,
    error: null,
    favorites: []
};

export default function (state = initialState, action): jokesReducer {
  switch (action.type) {

    case actionTypes.FETCH_JOKES_BEGIN: {
      return {
        ...state,
        isLoading: true,
        error: null,
        jokeList: [],
      }
    }

    case actionTypes.FETCH_FAVORITE_JOKES_BEGIN: {
      return {
        ...state,
        isLoadingFavorite: true,
      }
    }

    case actionTypes.FETCH_JOKES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        jokeList: action.payload.jokes,
      };
    }
    
    case actionTypes.FETCH_FAVORITE_JOKES_SUCCESS: {
      return {
        ...state,
        isLoadingFavorite: false,
        favorites: [...action.payload.jokes, ...state.favorites]
      };
    }

    case actionTypes.FETCH_JOKES_ERROR: {
      return {
        isLoading: false,
        isLoadingFavorite: false,
        error: action.error.message,
        jokeList: [],
        favorites: [],
      }
    }

    case actionTypes.ADD_TO_FAVORITES: {
      return {
        ...state,
        favorites: [action.payload.joke, ...state.favorites]
      }
    }

    case actionTypes.REMOVE_FROM_FAVORITES: {
      const index = state.favorites.findIndex(f => f.id=== action.payload.joke.id);
      return {
        ...state,
        favorites: [...state.favorites.slice(0, index), ...state.favorites.slice(index + 1)]
      }
    }

    default:
      return state;
  }
}
