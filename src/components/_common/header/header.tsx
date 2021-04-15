import React from 'react'
import styled from 'styled-components';
import commonReactComponentProps from '../../../typescript/commonReactComponentProps';

type HeaderProps = {
} & commonReactComponentProps;

export default function Header(props: HeaderProps) {

  return (
    <HeaderStyled>
        {props.children}
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`

    font-family: 'Waiting for the Sunrise', cursive;
    padding: 5px;
    margin-top: 25px;

    select {
      width: 100%;
      margin-top: 8px;
      float: right;
      margin-bottom: 6px;
    }

    h1 {
      font-size: 54px;
      font-weight: 200;
      color: #c39166;
      margin-top: 70px;
      margin-bottom: 50px;
      text-align: center;
      text-shadow: 3px 3px 1px #674c00;
  }
    }

    @media (min-width: 768px) { 
      select {
        width: 200px;
      }
    }

`;
