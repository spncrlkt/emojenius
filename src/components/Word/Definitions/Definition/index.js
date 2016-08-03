import React, { Component } from 'react'
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';


const Definition= ({ definition }) => (
  <Card>
    <CardHeader
      title={ `${definition.user.name}` }
      subtitle={ `@${definition.user.screen_name}` }
      avatar={ definition.user.profile_image_url }/>
    <CardText>
      { definition.definition }
    </CardText>
    <CardActions>
      <FlatButton label="Action1"/>
      <FlatButton label="Action2"/>
    </CardActions>
  </Card>
);

export default Definition;
