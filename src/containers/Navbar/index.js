import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';

export default class Navbar extends Component {

  onSignIn = () => {
    const signInURL = ENV.apiHost +
      '/login?next=' +
      encodeURIComponent(window.location.origin);

    window.location.assign(signInURL)
  }

  onSignOut = () => {
    window.location.assign(ENV.apiHost + '/logout')
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
