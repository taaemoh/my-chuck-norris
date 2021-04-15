import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Joke } from '../../../typescript/mainTypes';
import ResponsiveGrid from '../../_common/responsiveGrid/responsiveGrid';
import { StoreDataType } from '../../../app/store';
import Header from '../../_common/header/header';
import * as actions from './redux/actions';
import Loader from '../../_common/loader/loader';
import MicroInteractionMessage from '../../_common/microInteractionMessage/microInteractionMessage';
import FavoriteList from '../../favoriteList/favoriteList';
import JokeList from '../../jokeList/jokeList';

export default function JokesPage() {
  const jokes: Joke[] = useSelector((reduxStore: StoreDataType) => reduxStore.jokes.jokeList);
  const favoriteJokes: Joke[] = useSelector((reduxStore: StoreDataType) => reduxStore.jokes.favorites);
  const isLoading: boolean = useSelector((reduxStore: StoreDataType) => reduxStore.jokes.isLoading);
  const networkRequestError: string = useSelector((reduxStore: StoreDataType) => reduxStore.jokes.error);
  const dispatch = useDispatch();
  const timerFrequency = 5000;
  const maxFavoritesLimit = 10;

  useEffect(() => {
    dispatch(actions.fetchJokes(10));
  }, []);

  const renderLoadingAnimation = () => {
    if (isLoading) {
      return (
        <div data-test-id="loader">
          <Loader size={120} />
        </div>
      );
    }
  };
  
  const renderPageContent = () => {
    return(
      <ResponsiveGrid>
        <ResponsiveGrid.Column mobile={12} tablet={6} desktop={6}>
          <JokeList
            data-test-id="JokeList"
            jokes={jokes}
            maxFavoritesLimit={maxFavoritesLimit}
          />
        </ResponsiveGrid.Column>
        <ResponsiveGrid.Column mobile={12} tablet={6} desktop={6}>
          <FavoriteList
            data-test-id="FavoriteList"
            jokes={favoriteJokes}
            maxFavoritesLimit={maxFavoritesLimit}
            timerFrequency={timerFrequency}
          />
        </ResponsiveGrid.Column>
      </ResponsiveGrid>
    );
  }

  const renderPageHeader = () => {
    return (
      <div className="container">
        <Header data-test-id="header">
          <h1 >My Chuck Norris Challenge</h1>
        </Header>
      </div>
    );
  }
  
  if (networkRequestError) {
    return (
      <MicroInteractionMessage
        imgURL="/resources/oops-error.svg"
        title={"Oops!"}
        details={"Unexpected error occured"}></MicroInteractionMessage>
    )
  }
  
  return (
    <div>
      { renderPageHeader() }
      { 
        isLoading ?
          renderLoadingAnimation() :
          renderPageContent()
      }
    </div>
  );
}
