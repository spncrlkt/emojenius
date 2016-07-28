import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchUser,
} from 'actions';
import {
  isLoggedIn,
} from 'selectors/user';


class Login extends Component {
  componentDidMount() {
    const {
      params: {
        user_id,
      },
      fetchUser,
    } = this.props;

    fetchUser(user_id);
  }

  render() {
    return (
      <div>
        <h2>LOGIN LOGIN LOGIN</h2>
        <span>{ this.props.isLoggedIn ? 'YUP' : 'NOPE' }</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: isLoggedIn(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: bindActionCreators(fetchUser, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
