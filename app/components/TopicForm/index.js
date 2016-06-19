/**
*
* TopicForm
*
*/

import React from 'react';

import styles from './styles.css';

class TopicForm extends React.Component {
  render() {
    return (
      <div className={styles.topicForm}>
        <form name="topicForm">
          <p>
            <input type="text" placeholder="What do you want to learn?"/>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

export default TopicForm;
