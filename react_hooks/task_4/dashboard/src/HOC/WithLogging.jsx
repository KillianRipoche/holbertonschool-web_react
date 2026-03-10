export default function WithLogging(WrappedComponent) {
  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component'

  class WithLoggingComponent extends React.Component {
    static displayName = `WithLogging(${wrappedComponentName})`

    componentDidMount() {
      console.log(`Component ${wrappedComponentName} is mounted`)
    }

    componentWillUnmount() {
      console.log(`Component ${wrappedComponentName} is going to unmount`)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return WithLoggingComponent
}
