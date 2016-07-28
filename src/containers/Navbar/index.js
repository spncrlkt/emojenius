import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  logout,
} from 'actions';

import {
  isLoggedIn,
} from 'selectors/user';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';

class Navbar extends Component {

  onSignIn = () => {
    const signInURL = ENV.apiHost +
      '/login?next=' +
      encodeURIComponent(window.location.origin);

    window.location.assign(signInURL);
  }

  onSignOut = () => {
    const {
      logout,
    } = this.props;

    logout();
  }

  render() {
    const searchFieldStyles = {
      width: 200,
      marginTop: 5,
    };

    return (
      <AppBar
        title="EMOJI"
        iconElementLeft={
          <IconMenu
            iconButtonElement={
              <IconButton><MenuIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help" />
            <MenuItem
              primaryText="Sign in"
              onTouchTap={ this.onSignIn }
              />
            <MenuItem
              primaryText="Sign out"
              onTouchTap={ this.onSignOut }
              />
          </IconMenu>
        }
        children= {[
          <TextField
            style={ searchFieldStyles }
            key='search'
            hintText="Search Emoji"
          />
        ]}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: isLoggedIn(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(logout, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
