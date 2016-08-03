import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router';

import CircularProgress from 'material-ui/lib/circular-progress';

import styles from './styles.css';

import {
  fetchUser,
} from 'actions/user';

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

  componentWillReceiveProps(props) {
    if (props.isLoggedIn) {
      props.router.push(props.params.next)
    }
  }

  render() {
    return (
      <div className={ styles.container }>
        <CircularProgress mode="indeterminate" size={2} />
        <h2>Logging in</h2>
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
)(withRouter(Login))
