/**
*
* Topic
*
*/

import React from 'react';

import styles from './styles.css';

class Topic extends React.Component {
  render() {
    return (
      <div className={styles.topic}>
        <div className={styles.text}>{ this.props.topic }</div>
        <div className={styles.counter}>{ this.props.votes }</div>
      </div>
    );
  }
}

export default Topic;
