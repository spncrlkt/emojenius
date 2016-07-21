import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';

const searchFieldStyles = {
  width: 200,
  marginTop: 5,
};

const Navbar = () => (
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
        <MenuItem primaryText="Sign out" />
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

export default Navbar;
