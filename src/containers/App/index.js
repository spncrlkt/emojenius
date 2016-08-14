import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import styles from './styles.css';
import Navbar from 'containers/Navbar';

import {
  checkUserSession,
} from 'actions/user';

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    checkUserSession: bindActionCreators(checkUserSession, dispatch),
  }
}

class App extends Component {
  componentWillMount() {
    const {
      checkUserSession,
    } = this.props;

    checkUserSession();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className={ styles.content }>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
