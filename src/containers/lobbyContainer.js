import { bindActionCreator } from '../redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Lobby from '../lobby'
import { user, session } from '../redux/requests'

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  requests: {
    users: {
      fetch: bindActionCreator(user.fetch, dispatch),
    },
    sessions: {
      create: bindActionCreator(session.create, dispatch),
    },
  },
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Lobby)
)
