import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  logout,
} from 'actions/user';

import {
  search,
  clearSearchResults,
} from 'actions/search';

import {
  isLoggedIn,
} from 'selectors/user';

import SearchBar from 'components/Search/SearchBar';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';


class Navbar extends Component {

  onSignIn = () => {
    const signInURL = ENV.apiHost +
      '/login?next=' +
      encodeURIComponent(window.location);

    window.location.assign(signInURL);
  }

  onSignOut = () => {
    const {
      logout,
    } = this.props;

    logout();
  }

  handleHomeNavigation = () => {
    const {
      router,
    } = this.props;
    router.push('/');
  }

  render() {
    const {
      isLoggedIn,
      ...rest,
    } = this.props;

    const styles = {
      title: {
        cursor: 'pointer',
      },
    };

    return (
      <AppBar
        title={
          <span
            style={styles.title}
            onTouchTap={this.handleHomeNavigation}>
            EMOJENI.US
          </span>
        }
        iconElementLeft={
          <IconMenu
            iconButtonElement={
              <IconButton><MenuIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            { isLoggedIn ? 
              <MenuItem
                primaryText="Sign out"
                onTouchTap={ this.onSignOut }
                /> :
              <MenuItem
                primaryText="Sign in"
                onTouchTap={ this.onSignIn }
                />
            }
          </IconMenu>
        }
        children= {[
          <SearchBar
            { ...rest }
            key='search'/>
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
    search: bindActionCreators(search, dispatch),
    clearSearchResults: bindActionCreators(clearSearchResults, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar))
