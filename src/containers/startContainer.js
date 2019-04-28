import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Start from '../start'

const mapStateToProps = state => ({
  auth: state.auth,
})

const mapDispatchToProps = dispatch => ({})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Start)
)
