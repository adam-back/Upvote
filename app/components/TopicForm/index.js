/**
*
* TopicForm
*
*/

import React from 'react';

import styles from './styles.css';
var ENTER_KEY = 13;

class TopicForm extends React.Component {
  handleSubmit( e ) {
    e.preventDefault();
    // var author = this.state.author.trim();
    // var text = this.state.text.trim();
    console.log( 'here')
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    // this.setState({author: '', text: ''});
  }

  render() {
    return (
      <div className={styles.topicForm}>
        <form name="topicForm" onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder="What do you want to learn?" autoFocus={true}/>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

export default TopicForm;
