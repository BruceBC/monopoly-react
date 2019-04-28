import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Register from '../registration'
import { bindActionCreator } from '../redux'
import { user, auth } from '../redux/requests'
import { auth as authEvent } from '../redux/events'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  requests: {
    users: {
      create: bindActionCreator(user.create, dispatch),
    },
    auth: {
      authorize: bindActionCreator(auth.authorize, dispatch),
    },
  },
  events: {
    auth: {
      authorized: bindActionCreator(authEvent.authorized, dispatch),
    },
  },
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
)
