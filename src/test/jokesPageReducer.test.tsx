import jokesPageReducer from '../components/pages/jokes/redux/jokesPageReducer';
import * as actionTypes from '../typescript/actions';

describe("jokes Page Reducer", () => {
  it("FETCH_JOKES_BEGIN", () => {
    const state = {
      jokeList: [], isLoading: false, isLoadingFavorite: false, error: null, favorites: []
    }

    const expectedState = {
      jokeList: [], isLoading: true, isLoadingFavorite: false, error: null, favorites: []
    };

    const action = {
      type: actionTypes.FETCH_JOKES_BEGIN,
    };

    expect(jokesPageReducer(state, action)).toStrictEqual(expectedState);
  });


  it("FETCH_FAVORITE_JOKES_BEGIN", () => {
    const state = {
      jokeList: [], isLoading: false, isLoadingFavorite: false, error: null, favorites: []
    }

    const expectedState = {
      jokeList: [], isLoading: false, isLoadingFavorite: true, error: null, favorites: []
    };

    const action = {
      type: actionTypes.FETCH_FAVORITE_JOKES_BEGIN,
    };

    expect(jokesPageReducer(state, action)).toStrictEqual(expectedState);
  });

  it("FETCH_JOKES_SUCCESS", () => {
    const state = {
      jokeList: [], isLoading: false, isLoadingFavorite: false, error: null, favorites: []
    }

    const expectedState = {
      jokeList: [
        { "id": 599, "joke": "Chuck Norris can make fire using two ice cubes.", "categories": [] },
        { "id": 438, "joke": "Chuck Norris likes his ice like he likes his skulls: crushed.", "categories": []}
      ],
      isLoading: false,
      isLoadingFavorite: false,
      error: null,
      favorites: []
    };

    const action = {
      type: actionTypes.FETCH_JOKES_SUCCESS,
      payload: {
        "jokes": [
            { "id": 599, "joke": "Chuck Norris can make fire using two ice cubes.", "categories": [] },
            { "id": 438, "joke": "Chuck Norris likes his ice like he likes his skulls: crushed.", "categories": []}
        ],
      }
    };

    expect(jokesPageReducer(state, action)).toStrictEqual(expectedState);
  });

  it("FETCH_FAVORITE_JOKES_SUCCESS", () => {
    const state = {
      jokeList: [], isLoading: false, isLoadingFavorite: false, error: null, favorites: []
    }

    const expectedState = {
      jokeList: [],
      isLoading: false,
      isLoadingFavorite: false,
      error: null,
      favorites: [
        { "id": 599, "joke": "Chuck Norris can make fire using two ice cubes.", "categories": [] },
        { "id": 438, "joke": "Chuck Norris likes his ice like he likes his skulls: crushed.", "categories": []}
      ]
    };

    const action = {
      type: actionTypes.FETCH_FAVORITE_JOKES_SUCCESS,
      payload: {
        "jokes": [
            { "id": 599, "joke": "Chuck Norris can make fire using two ice cubes.", "categories": [] },
            { "id": 438, "joke": "Chuck Norris likes his ice like he likes his skulls: crushed.", "categories": []}
        ],
      }
    };

    expect(jokesPageReducer(state, action)).toStrictEqual(expectedState);
  });

  it("ADD_TO_FAVORITES", () => {
    const state = {
      jokeList: [
        { "id": 599, "joke": "Chuck Norris can make fire using two ice cubes.", "categories": [] },
        { "id": 438, "joke": "Chuck Norris likes his ice like he likes his skulls: crushed.", "categories": []}
      ],
      isLoading: false,
      isLoadingFavorite: false,
      error: null,
      favorites: []
    }

    const expectedState = {
      jokeList: [
        { "id": 599, "joke": "Chuck Norris can make fire using two ice cubes.", "categories": [] },
        { "id": 438, "joke": "Chuck Norris likes his ice like he likes his skulls: crushed.", "categories": []}
      ],
      isLoading: false,
      isLoadingFavorite: false,
      error: null,
      favorites: [
        { "id": 599, "joke": "Chuck Norris can make fire using two ice cubes.", "categories": [] }
      ]
    };

    const action = {
      type: actionTypes.ADD_TO_FAVORITES,
      payload: {
        joke: { "id": 599, "joke": "Chuck Norris can make fire using two ice cubes.", "categories": [] },
      }
    };

    expect(jokesPageReducer(state, action)).toStrictEqual(expectedState);
  });


  it("REMOVE_FROM_FAVORITES", () => {
    const state = {
      jokeList: [
        { "id": 599, "joke": "Chuck Norris can make fire using two ice cubes.", "categories": [] },
        { "id": 438, "joke": "Chuck Norris likes his ice like he likes his skulls: crushed.", "categories": []}
      ],
      isLoading: false,
      isLoadingFavorite: false,
      error: null,
      favorites: []
    }
    
    const expectedState = {
      jokeList: [
        { "id": 599, "joke": "Chuck Norris can make fire using two ice cubes.", "categories": [] },
        { "id": 438, "joke": "Chuck Norris likes his ice like he likes his skulls: crushed.", "categories": []}
      ],
      isLoading: false,
      isLoadingFavorite: false,
      error: null,
      favorites: []
    };

    const action = {
      type: actionTypes.REMOVE_FROM_FAVORITES,
      payload: {
        joke: { "id": 599, "joke": "Chuck Norris can make fire using two ice cubes.", "categories": [] },
      }
    };

    expect(jokesPageReducer(state, action)).toStrictEqual(expectedState);
  });

});
