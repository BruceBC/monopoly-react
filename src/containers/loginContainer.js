import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from '../login'
import { auth } from '../redux/actions'

const mapStateToProps = state => ({
  auth: state.auth,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      authorize: auth.authorize,
    },
    dispatch
  )

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)
