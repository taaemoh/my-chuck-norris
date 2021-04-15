import React from 'react';
import styled from 'styled-components';
import commonReactComponentProps from '../../../typescript/commonReactComponentProps';

type Props = {
    imgURL: string,
    title: string,
    details: string,
} & commonReactComponentProps

export default function MicroInteractionMessage(props: Props) {
  return (
    <MicroInteractionMessageStyled className="container">
        <img src={props.imgURL} />
        <p>{props.title}</p>
        <p>{props.details}</p>
    </MicroInteractionMessageStyled>
  );
}

const MicroInteractionMessageStyled = styled.div`
    text-align: center;
    padding-top: 100px;

    img {
        width: 180px;
    }
    
    p:nth-child(2) {
        margin-top: 40px;
        font-size: 29px;
        margin-bottom: 8px;
        color: #a1b850;
        line-height: 1;
        font-weight: 200;
    }

    p:nth-child(3) {
        font-size: 14px;
        color: #434371;
    }

    transition-duration: 0.1s;
    transition-property: all;
`;
