import React, { PureComponent } from 'react'

class Auth extends PureComponent {
  state = {
    authorized: false,
  }

  componentDidMount() {
    this.props.requests.users.fetch(this.handleSuccess, this.handleFailure)
  }

  handleSuccess = () => {
    this.setState({ authorized: true })
  }

  handleFailure = () => {
    // Log user out and clear any credentials
    this.props.actions.auth.reject()

    this.props.history.replace('/login')
  }

  render() {
    const { authorized } = this.state

    // TODO: Add loader
    return authorized ? this.props.children : null
  }
}

export default Auth
