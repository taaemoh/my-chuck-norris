import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from "redux-mock-store";
import jokes from "./testFixtures/jokes.json";
import arrayOf10jokes from "./testFixtures/jokes10.json";
import FavoriteList from '../components/favoriteList/favoriteList';

const createComponentWithMockStore = (state, props={}) => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(state);

  return mount(
    <BrowserRouter>
      <Provider store={store}>
        <FavoriteList maxFavoritesLimit={10} jokes={jokes} timerFrequency={5000} {...props} />
      </Provider>
    </BrowserRouter>
  );
}

describe("<FavoriteList/>", () => {

  it("Renders a list of favorite jokes items when the number of favorite jokes passed is greater than 0", () => {
    const state = {
      jokes : {
        jokeList: jokes,
        isLoading: false,
        favorites: jokes,
      }
    };

    const wrapper = createComponentWithMockStore(state);
    expect(wrapper.find('[data-test-id="JokeListItem"]').length).toEqual(5);
  });

  it("Renders the toggle on/off buttton", () => {
    const state = {
      jokes : {
        jokeList: jokes,
        isLoading: false,
        favorites: [],
      }
    };

    const wrapper = createComponentWithMockStore(state);
    expect(wrapper.find('[data-test-id="fetch-toggle-button"]').length).toEqual(1);
  });

  it("displays a counter with the correct number of favorite jokes", () => {
    const state = {
      jokes : {
        jokeList: [],
        isLoading: false,
        favorites: jokes,
      }
    };

    const expectedValue = 'Number of favorites: 5';
    const wrapper = createComponentWithMockStore(state);
    expect(wrapper.find('[data-test-id="favorites-counter"]').text()).toEqual(expectedValue);
  });

  it("Renders error message when the user reaches the limit of 10 favorie jokes", () => {
    const state = {
      jokes : {
        jokeList: [],
        isLoading: false,
        favorites: jokes,
      }
    };

    const expectedValue = ' Favorites limit 10 is reached, please remove some jokes ';
    const wrapper = createComponentWithMockStore(state, { jokes: arrayOf10jokes });
    expect(wrapper.find('[data-test-id="favorites-error-message"]').text()).toEqual(expectedValue);
  });

});


/*
https://hacks.mozilla.org/2018/04/testing-strategies-for-react-and-redux/
https://tablet.com/@Yohanna/difference-between-enzymes-rendering-methods-f82108f49084
https://www.youtube.com/watch?v=AMo3d_K6e2A
https://github.com/simpletut/Testing-React-Redux-with-Jest-and-Enzyme/blob/50393c043f334b78cf4e1d172a2510a609d60af3/src/component/button/spec.js
https://stackoverflow.com/questions/61801238/react-testing-library-test-onclick-event
https://hackernoon.com/unit-testing-redux-connected-components-692fa3c4441c

https://www.codota.com/code/javascript/modules/redux-mock-store
https://github.com/henriqueweiand/reactjs-crud-state-test/blob/master/src/pages/__tests__/formDocumentos.test.js
https://dev.to/gsto/test-clicks-on-connected-components-in-under-10-lines-of-code-5a7c
https://tablet.com/2359mediaa5-techniques-for-frontend-testing-with-jest-and-enzyme-8e926b3c92f8
https://github.com/reduxjs/redux-mock-store/blob/v0.0.6/README.md




// store.dispatch(actions.addToFavorite({ "id": 609, "joke": "There was never anything wrong with Achilles' heel until he got mad and decided to kick Chuck Norris.", "categories": [] }));
    // wrapper.setProps({ name: 'bar' });
    // wrapper.setState({ favoriteJokes: state.jokes.jokeList });

*/