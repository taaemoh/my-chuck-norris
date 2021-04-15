import * as actionTypes from '../../../../typescript/actions'
import {Joke} from '../../../../typescript/mainTypes';

export function addToFavorite(joke: Joke) {
  return {
    type: actionTypes.ADD_TO_FAVORITES,
    payload: {
      joke
    }
  };
}

export function removeFromFavorite(joke: Joke) {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITES,
    payload: {
      joke
    }
  };
}