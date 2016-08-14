import React, { Component } from 'react'
import CardActions from 'material-ui/lib/card/card-actions';
import IconButton from 'material-ui/lib/icon-button';
import Badge from 'material-ui/lib/badge';
import FontIcon from 'material-ui/lib/font-icon';

import Colors from 'material-ui/lib/styles/colors';



export default class ActionBar extends Component {
  handleUpvote = () => this.handleVote(true)
  handleDownvote = () => this.handleVote(false)

  handleVote = (isUpvote) => {
    const {
      definition,
      addVote,
      userId,
      params,
    } = this.props;
    addVote(params.title, definition.get('id'), userId, isUpvote)
  }

  render() {
    const {
      definition,
    } = this.props;

    return (
      <CardActions>
        <Badge
          badgeContent={ definition.get('upvotes') }
          badgeStyle={{top: 16, right: 16}}
          primary={true}>
          <IconButton
            tooltip="YA"
            onTouchTap={ this.handleUpvote }>
            <FontIcon
              color={ definition.get('userUpvoted') ? Colors.cyan500 : ''}
              className="material-icons">
              thumb_up
            </FontIcon>
          </IconButton>
        </Badge>
        <Badge
          badgeContent={ definition.get('downvotes')}
          badgeStyle={{top: 16, right: 16}}
          primary={true}>
          <IconButton
            tooltip="NAW"
            onTouchTap={ this.handleDownvote }>
            <FontIcon
              color={ definition.get('userDownvoted') ? Colors.red500 : ''}
              className="material-icons">
              thumb_down
            </FontIcon>
          </IconButton>
        </Badge>
      </CardActions>
    )
  }
}
