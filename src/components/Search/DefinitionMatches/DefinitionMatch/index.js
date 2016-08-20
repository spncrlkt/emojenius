import React, { Component } from 'react';
import Paper from 'material-ui/lib/paper';

import styles from './styles.css';

export default class DefinitionMatch extends Component {
  handleDefinitionClick = () => {
    const {
      router,
      definition,
    } = this.props;
    router.push(`word/${definition.getIn(['word', 'title'])}`);
  }

  render() {
    const {
      definition,
    } = this.props;
    const wordTitle = definition.getIn(['word', 'title']);
    const definitionText = definition.get('definition');

    return (
        <div onClick={ this.handleDefinitionClick } className={ styles.container }>
          <Paper>
            <div className={ styles.content }>
              { wordTitle } - { definitionText }
            </div>
          </Paper>
        </div>
    );
  }
}
