import React from 'react';
import styled from 'styled-components'; 
import { Redirect } from 'react-router-dom';
import MicroInteractionMessage from '../components/_common/microInteractionMessage/microInteractionMessage';

export default function ErrorPage404() {

    const [redirectHome, setRedirectHome] = React.useState(false);

    const handleClick = () => {
        setRedirectHome(true);
    };

    if (redirectHome) {
        return <Redirect to="/" />
    }
    
    return (
        <Container>
            <MicroInteractionMessage
                imgURL="/resources/fnf.png"
                title="404!"
                details="What are u doing here? you're transpassing Chuck norris property!"
            />
            <button onClick={handleClick}>Back to Home</button>
        </Container>
    );
}

const Container = styled.div`
    text-align: center;

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
    }
`;
