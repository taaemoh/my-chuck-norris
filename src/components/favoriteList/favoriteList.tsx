import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import commonReactComponentProps from '../../typescript/commonReactComponentProps';
import { Joke } from '../../typescript/mainTypes';
import JokeListItem from '../_common//jokeListItem/jokeListItem';
import * as jokeListItemActions from '../_common/jokeListItem/redux/actions';
import * as jokesPageActions from '../pages/jokes/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { StoreDataType } from '../../app/store';
import Loader from '../_common/loader/loader';

type FavoriteListProps = {
  jokes: Joke[],
  maxFavoritesLimit: number,
  timerFrequency: number,
} & commonReactComponentProps

export default function FavoriteList(props: FavoriteListProps) {
  const { jokes, maxFavoritesLimit, timerFrequency } = props;
  const dispatch = useDispatch();
  const isLoadingFavorite: boolean = useSelector((reduxStore: StoreDataType) => reduxStore.jokes.isLoadingFavorite);
  const [timer, setTimer] = useState(null);
  const [favoriteLimitReachedMessage, setfavoriteLimitReachedMessage] = useState('');
  
  const handleClickRemoveFromFavorites = (joke: Joke) => {
    dispatch(jokeListItemActions.removeFromFavorite(joke));
  };

  useEffect(() => {
    if (jokes.length >= maxFavoritesLimit) {
      setTimer(clearInterval(timer));
      setfavoriteLimitReachedMessage(`Favorites limit ${maxFavoritesLimit} is reached, please remove some jokes`);
    } else {
      setfavoriteLimitReachedMessage('');
    }
    
  }, [jokes.length]);

  const fetcher = () => {
    if (jokes.length <= maxFavoritesLimit) {
      dispatch(jokesPageActions.fetchJokes(1, true));
    }
  }
  
  const handleClickTimerButton = () => {
    if (timer) {
      setTimer(clearInterval(timer));
    } else {
      setTimer(setInterval(fetcher, timerFrequency));
    }
  }
  
  const renderFavoriteList = () => {
    return (
      <>
      {
        isLoadingFavorite &&
          <div className="loader-wrapper">
            <Loader size={60} />
          </div>
      }
      {
        jokes.map((joke:Joke) => (
          <JokeListItem data-test-id="JokeListItem" key={`favorite-list-item-joke-${joke.id}`}>
            <JokeListItem.Text favorite>
              {joke.joke}
            </JokeListItem.Text>
            <JokeListItem.RemoveFavorite onClick={() => handleClickRemoveFromFavorites(joke)}>
              ✕
            </JokeListItem.RemoveFavorite>
          </JokeListItem>
        ))
      }
      </>
    );
  }

  const renderFetchingFavoritesButtoon = () => {
    return (
      <>
        <button
          onClick={handleClickTimerButton}
          disabled={jokes.length >= maxFavoritesLimit}
          data-test-id="fetch-toggle-button"
        >
          {`${ timer ? '▐▐ ' : '⏵︎ ' }`}
          {`Turn ${ !timer ? 'ON' : 'OFF' } timer`}
        </button>
        {
          favoriteLimitReachedMessage ?
            <span className="favorites-msg" data-test-id="favorites-error-message"> {favoriteLimitReachedMessage} </span> :
            <div className="counter" data-test-id="favorites-counter">Number of favorites: { jokes.length }</div>
        }
      </>
    );
  }
  return (
    <Container>
      { renderFetchingFavoritesButtoon() }
      { renderFavoriteList() }
    </Container>
  );
};

const Container = styled.div`
  button {
    border: none;
    padding-bottom: 14px;
    padding-top: 14px;
    background: #a1b850;
    color: white;
    width: 145px;
    outline: none;
    transition-property: all;
    transition-duration: 0.2s;
    font-weight: bold;
    border-radius: 5px;
    margin-bottom: 30px;

    &:disabled {
      background: grey;
      color: #d2d2d2;
    }
  }

  .counter {
    color: #924402;
    display: inline-block;
    margin-left: 20px;
    font-size: 16px;
    font-family: georgia;
    font-style: italic;

  }

  .loader-wrapper {
    margin-top: 40px;
    margin-bottom: 70px;
  }
  
  .favorites-msg {
    margin-left: 10px;
    color: red;
    width: 50%;
    display: inline-block;
    line-height: 1.4;
    vertical-align: sub;
  }

`;
