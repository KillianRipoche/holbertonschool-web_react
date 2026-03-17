import React from 'react'

export default function WithLogging(WrappedComponent) {
  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component'

  class WithLoggingComponent extends React.Component {
    static displayName = `WithLogging(${wrappedComponentName})`

    componentDidMount() {
      console.log(`Component ${WithLoggingComponent.displayName} is mounted`)
    }

    componentWillUnmount() {
      console.log(`Component ${WithLoggingComponent.displayName} is going to unmount`)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return WithLoggingComponent
}
