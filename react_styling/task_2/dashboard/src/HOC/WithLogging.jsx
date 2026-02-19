import React from 'react';

export default function WithLogging(WrappedComponent) {
  class WithLogging extends React.Component {
    componentDidMount() {
      console.log(`Component ${WithLogging.displayName} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WithLogging.displayName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLogging.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithLogging;
}
