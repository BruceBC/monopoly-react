import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from '../login'
import { bindActionCreator } from '../redux'
import { user, auth as authRequest } from '../redux/requests'
import { auth as authAction } from '../redux/actions'

const mapStateToProps = state => ({
  auth: state.auth,
})

const mapDispatchToProps = dispatch => ({
  requests: {
    users: {
      fetch: bindActionCreator(user.fetch, dispatch),
    },
    auth: {
      authorize: bindActionCreator(authRequest.authorize, dispatch),
    },
  },
  actions: {
    auth: {
      reject: bindActionCreator(authAction.reject, dispatch),
    },
  },
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)
