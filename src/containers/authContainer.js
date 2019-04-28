import { bindActionCreator } from '../redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Auth from '../auth'
import { user } from '../redux/requests'
import { auth } from '../redux/actions'

const mapStateToProps = state => ({
  auth: state.auth,
})

const mapDispatchToProps = dispatch => ({
  requests: {
    users: {
      fetch: bindActionCreator(user.fetch, dispatch),
    },
  },
  actions: {
    auth: {
      reject: bindActionCreator(auth.reject, dispatch),
    },
  },
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Auth)
)
