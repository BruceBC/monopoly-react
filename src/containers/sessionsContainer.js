import { bindActionCreator } from '../redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Sessions from '../sessions'
import { session } from '../redux/requests'

const mapStateToProps = state => ({
  user: state.user,
  session: state.session,
})

const mapDispatchToProps = dispatch => ({
  requests: {
    sessions: {
      all: bindActionCreator(session.all, dispatch),
    },
  },
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sessions)
)
