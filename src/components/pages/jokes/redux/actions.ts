import * as services from './services';
import * as actionTypes from '../../../../typescript/actions';
import { Joke } from '../../../../typescript/mainTypes';

function fetchJokesBegin() {
  return {
    type: actionTypes.FETCH_JOKES_BEGIN,
  };
}

function fetchFavoriteJokesBegin() {
  return {
    type: actionTypes.FETCH_FAVORITE_JOKES_BEGIN,
  };
}

function fetchFavoriteJokesSuccess(jokes: Joke[], page: number) {
  return { 
    type: actionTypes.FETCH_FAVORITE_JOKES_SUCCESS,
    payload: {jokes, page}
  };
}

function fetchJokesSuccess(jokes: Joke[], page: number) {
  return {
    type: actionTypes.FETCH_JOKES_SUCCESS,
    payload: {jokes, page}
  };
}

function fetchJokesError(error: Error) {
  return {
    type: actionTypes.FETCH_JOKES_ERROR,
    error
  };
}

export function fetchJokes(count: number, attachToFavorites: boolean = false) {
  return async (dispatch) => {
    try {
      dispatch( attachToFavorites ? fetchFavoriteJokesBegin() : fetchJokesBegin());
      const jokesApiResponse = await services.fetchJokes(count);
      const jokes = await jokesApiResponse.json();
      dispatch( attachToFavorites ? fetchFavoriteJokesSuccess(jokes.value, count): fetchJokesSuccess(jokes.value, count));
    }
    catch(error) {
      // console.log(error);
      dispatch(fetchJokesError(error));
    }
  };
} 
