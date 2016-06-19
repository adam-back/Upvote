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
    return (
      <div className={styles.topicList}>
        <Topic />
        <Topic />
        <Topic />
      </div>
    );
  }
}

export default TopicList;
