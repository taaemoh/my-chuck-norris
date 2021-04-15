import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import configureMockStore from "redux-mock-store";
import JokesPage from '../components/pages/jokes/jokesPage';

const createComponentWithMockStore = state => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(state);

  return mount(
      <Provider store={store}>
        <JokesPage />
      </Provider>
  );
}

describe("<JokesPage/>", () => {
  
  it("Renders a loading animation when page is fetching jokes and isLoading=true", () => {
    const state = {
      jokes : {
        jokeList: [],
        isLoading: true,
      }
    };

    const wrapper = createComponentWithMockStore(state);
    expect(wrapper.find('[data-test-id="loader"]').length).toEqual(1);
  });

  it("Renders the favorite jokes section", () => {
    const state = {
      jokes : {
        jokeList: [],
        isLoading: false,
        favorites: [],
      }
    };

    const wrapper = createComponentWithMockStore(state);
    expect(wrapper.find('[data-test-id="FavoriteList"]').length).toEqual(1);
  });

  it("Renders the normal jokes section", () => {
    const state = {
      jokes : {
        jokeList: [],
        isLoading: false,
        favorites: [],
      }
    };

    const wrapper = createComponentWithMockStore(state);
    expect(wrapper.find('[data-test-id="JokeList"]').length).toEqual(1);
  });

  it("Renders the page header with h1 title inside", () => {
    const state = {
      jokes : {
        jokeList: [],
        isLoading: true,
      }
    };

    const wrapper = createComponentWithMockStore(state);
    expect(wrapper.find('[data-test-id="header"]').length).toEqual(1);
  });

});





