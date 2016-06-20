/**
*
* TopicList
*
*/

import React from 'react';

import styles from './styles.css';
import Topic from '../Topic';

class TopicList extends React.Component {
  render() {
    var topics = this.props.data.map(function( topic ) {
      return (
        <Topic key={topic.key} topic={topic.topic} votes={topic.votes} />
      );
    });

    return (
      <div className={styles.topicList}>
        {topics}
      </div>
    );
  }
}

export default TopicList;
