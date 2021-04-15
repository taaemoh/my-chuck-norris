import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import configureMockStore from "redux-mock-store";
import JokeList from '../components/jokeList/jokeList';
import jokes from "./testFixtures/jokes.json";

const createComponentWithMockStore = (state) => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(state);

  return mount(
      <Provider store={store}>
        <JokeList maxFavoritesLimit={10} jokes={state.jokes.jokeList} />
      </Provider>
  );
}

describe("<JokeList/>", () => {
  it("Successfully Displays joke items", () => {
    const state = {
      jokes : {
        jokeList: jokes,
        isLoading: false,
        favorites: [],
      }
    };

    const wrapper = createComponentWithMockStore(state);
    expect(wrapper.find('[data-test-id="item"]').length).toEqual(5);
  });
});
