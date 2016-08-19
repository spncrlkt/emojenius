import React, { Component } from 'react'
import CardActions from 'material-ui/lib/card/card-actions';
import IconButton from 'material-ui/lib/icon-button';
import Badge from 'material-ui/lib/badge';
import FontIcon from 'material-ui/lib/font-icon';

import Colors from 'material-ui/lib/styles/colors';



export default class ActionBar extends Component {
  constructor() {
    super();
    this.state = {
      deleting: false,
    };
  }

  handleUpvote = () => this.handleVote(true)
  handleDownvote = () => this.handleVote(false)

  handleVote = (isUpvote) => {
    const {
      definition,
      addVote,
      params,
    } = this.props;
    addVote(params.title, definition.get('id'), isUpvote)
  }

  handleDelete = () => {
    if (this.state.deleting) {
      const {
        definition,
        deleteDefinition,
        params,
      } = this.props;
      console.log('deletin 4 real');
      deleteDefinition(params.title, definition.get('id'))
    } else {
      this.setState({ deleting: true });
    }
  }

  render() {
    const {
      definition,
    } = this.props;

    const upvotes = definition.get('upvotes');
    const userUpvoted = definition.get('userUpvoted');
    const downvotes = definition.get('downvotes');
    const userDownvoted = definition.get('userDownvoted');
    const userOwns = definition.get('userOwns');

    const deleteButton = userOwns ?
      <IconButton
        tooltip="DELETE"
        onTouchTap={ this.handleDelete }>
        <FontIcon
          color={ this.state.deleting ? Colors.red500 : ''}
          className="material-icons">
          { this.state.deleting ? 'delete_forever' : 'delete' }
        </FontIcon>
      </IconButton> :
      <div/>;

    return (
      <CardActions>
        <Badge
          badgeContent={ upvotes }
          badgeStyle={{top: 16, right: 16}}
          primary={true}>
          <IconButton
            tooltip="YA"
            onTouchTap={ this.handleUpvote }>
            <FontIcon
              color={ userUpvoted ? Colors.cyan500 : ''}
              className="material-icons">
              thumb_up
            </FontIcon>
          </IconButton>
        </Badge>
        <Badge
          badgeContent={ downvotes}
          badgeStyle={{top: 16, right: 16}}
          primary={true}>
          <IconButton
            tooltip="NAW"
            onTouchTap={ this.handleDownvote }>
            <FontIcon
              color={ userDownvoted ? Colors.red500 : ''}
              className="material-icons">
              thumb_down
            </FontIcon>
          </IconButton>
        </Badge>
        { deleteButton }
      </CardActions>
    )
  }
}
