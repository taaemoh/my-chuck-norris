import React from 'react';
import styled from 'styled-components';
import commonReactComponentProps from '../../../typescript/commonReactComponentProps';

type Props = {
  favorite?: boolean,
} & commonReactComponentProps

type jokeListItemFavoriteProps = {
  disabled?: boolean,
} & commonReactComponentProps

export default function JokeListItem(props: commonReactComponentProps) {
  const { children } = props;
  return (
    <StyledJokeListItem>
      {children}
    </StyledJokeListItem>
  );
}

JokeListItem.Text = (props: Props) => {
  const { children, favorite } = props;
  return (
    <StyledText favorite={favorite}>{children}</StyledText>
  );
};

JokeListItem.AddToFavorite = (props: jokeListItemFavoriteProps) => {
  const { children, onClick, disabled } = props;
  return (
    <AddToFavoriteContainer disabled={disabled} onClick={onClick}>
      {children}
    </AddToFavoriteContainer>
  );
};

JokeListItem.RemoveFavorite = (props: commonReactComponentProps) => {
  const { children, onClick } = props;
  return (
    <StyledRemoveFavorite onClick={onClick}>
      {children}
    </StyledRemoveFavorite>
  );
};

const StyledJokeListItem = styled.div`
    padding: 15px;
    min-height: 140px;
    background: #fbfbfb;
    border-radius: 8px;
    transition-duration: 0.2s;
    transition-property: all;
    display: flex;
    max-height: 150px;
    margin-bottom: 30px;
`;

const StyledText = styled.p<{ favorite?: boolean }>`
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: auto;
    text-align: center;

    ${props => props.favorite ?
      `
      color: #2c7c9c;
      font-family: georgia;
      font-style: italic;
      font-size: 23px;
      -webkit-line-clamp: 3;
    ` :
    `
      font-size: 13px;
      font-family: verdana;
    `
  }
`;

const AddToFavoriteContainer = styled.span<{ disabled?: boolean }>`
  ${props => props.disabled ? `
      cursor: auto;
      color: #d2d2d2;
      background: gray;
    `
    :
    `
      cursor: pointer;
      color: white;
      background: #a0b750;
    `
  }

  transition-duration: 0.2s;
  transition-property: all;
  user-select: none;
  font-size: 26px;
  position: absolute;
  right: 4px;
  top: 1px;
  width: 27px;
  height: 27px;
  line-height: 22px;
  text-align: center;
  border-radius: 48px;
`;

const StyledRemoveFavorite = styled.span`
  user-select: none;
  font-size: 18px;
  font-weight: bold;
  color: #c39166;
  height: 20px;
  line-height: 20px;
  cursor: pointer;
`;
