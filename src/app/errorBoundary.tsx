import React from 'react';
import MicroInteractionMessage from '../components/_common/microInteractionMessage/microInteractionMessage';

type Props = {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<object, Props> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <MicroInteractionMessage imgURL="/resources/oops-error.svg" title={"Oops!"} details={"Unexpected error happened, we apologise for this inconvenience, Our technical team has been notified and we will fix this issue as soon as possible"}></MicroInteractionMessage>
    }

    return this.props.children; 
  }
}
