import React, { Component } from 'react'
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

import ActionBar from './ActionBar';


export default class Definition extends Component {
  render() {
    const {
      definition,
      isLoggedIn,
    } = this.props;

    const userName = definition.getIn(['user', 'name']);
    const screenName = definition.getIn(['user', 'screen_name']);
    const profileImgUrl = definition.getIn(['user', 'profile_image_url']);
    const definitionTxt = definition.get('definition');

    return (
      <Card>
        <CardHeader
          title={ userName }
          subtitle={ `@${screenName}` }
          avatar={ profileImgUrl }/>
        <CardText>
          { definitionTxt }
        </CardText>
        <ActionBar { ...this.props }/>
      </Card>
    )
  }
}
