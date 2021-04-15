import React from 'react';
import styled from 'styled-components';
import commonReactComponentProps from '../../../typescript/commonReactComponentProps';

type Props = {
  size: number,
} & commonReactComponentProps

export default function Loader(props: Props) {
  const { size } = props;
  return (
    <LoaderContainer size={size} />
  );
}

const LoaderContainer = styled.div<{ size?: number }>`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #a1b850;
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
`;