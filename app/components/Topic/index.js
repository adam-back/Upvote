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
        <div className={styles.text}>What's the update on the mobile application?</div>
        <div className={styles.counter}>1</div>
      </div>
    );
  }
}

export default Topic;
