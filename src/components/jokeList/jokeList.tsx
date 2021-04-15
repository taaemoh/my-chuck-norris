import React from 'react';
import styled from 'styled-components';
import commonReactComponentProps from '../../typescript/commonReactComponentProps';
import { Joke } from '../../typescript/mainTypes';
import JokeListItem from '../_common/jokeListItem/jokeListItem';
import * as actions from '../_common/jokeListItem/redux/actions';
import ResponsiveGrid from '../_common/responsiveGrid/responsiveGrid';
import { StoreDataType } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';

type JokeListProps = {
  jokes: Joke[]
  maxFavoritesLimit: number,
} & commonReactComponentProps

export default function JokeList(props: JokeListProps) {
  const { jokes, maxFavoritesLimit } = props;
  const dispatch = useDispatch();
  const favoriteJokes: Joke[] = useSelector((reduxStore: StoreDataType) => reduxStore.jokes.favorites);

  const handleClickAddToFavorites = (joke: Joke) => {
    if (favoriteJokes.length < maxFavoritesLimit) {
      dispatch(actions.addToFavorite(joke));
    }
  };

  const renderJokeList = () => {
    return (
      <JokeListWrapper>
        <ResponsiveGrid>
          {
            jokes.map((joke: Joke) => {
              return (
                <ResponsiveGrid.Column mobile={12} tablet={12} desktop={6} key={`list-item-joke-${joke.id}`}>
                  <JokeListItem data-test-id="item">
                      <JokeListItem.Text data-test-id="joke-name">{joke.joke}</JokeListItem.Text>
                      {
                        ! favoriteJokes.some(fj => fj.id === joke.id) &&
                        <JokeListItem.AddToFavorite
                          data-test-id="AddToFavorite"
                          onClick={() => handleClickAddToFavorites(joke)}
                          disabled={ favoriteJokes.length === maxFavoritesLimit }
                        >
                          +
                        </JokeListItem.AddToFavorite>
                      }
                      
                  </JokeListItem>
                </ResponsiveGrid.Column>
              );
            })
          }
        </ResponsiveGrid>
      </JokeListWrapper>
    );
  }

  return (
    <div>
      { renderJokeList() }
    </div>
  );
};

const JokeListWrapper = styled.div`
  margin-top: 76px;
`;