import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Snackbar from 'material-ui/lib/snackbar';

import {
  clearError,
} from 'actions/error';

import {
  errorMessage,
  snackbarOpen,
} from 'selectors/error';

function mapStateToProps(state) {
  return {
    errorMessage: errorMessage(state),
    snackbarOpen: snackbarOpen(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearError: bindActionCreators(clearError, dispatch),
  }
}

class ErrorBar extends Component {
  render() {
    const {
      errorMessage,
      snackbarOpen,
      clearError,
    } = this.props;

    return (
      <Snackbar
        open={ snackbarOpen }
        message={ errorMessage }
        autoHideDuration={ 3000 }
        onActionTouchTap={ () => null }
        onRequestClose={ clearError }
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBar)
