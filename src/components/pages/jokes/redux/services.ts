import {appEndpoints} from '../../../../app/appEndpoints';

export function fetchJokes(page = 10): Promise<Response> {
  return fetch(`${appEndpoints.jokes}?count=${page}`);
}
