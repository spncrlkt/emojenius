import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchUser,
} from 'actions';


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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
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
