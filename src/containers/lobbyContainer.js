import { bindActionCreator } from '../redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Lobby from '../lobby'
import { user } from '../redux/requests'

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  requests: {
    users: {
      fetch: bindActionCreator(user.fetch, dispatch),
    },
  },
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Lobby)
)
