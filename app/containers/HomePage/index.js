/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import TopicList from '../../components/TopicList';
import TopicForm from '../../components/TopicForm';
import styles from './styles.css';

var topics = [
  { key: 1, topic: 'What are you guys doing?', votes: 2 },
  { key: 2, topic: 'Who are you?', votes: 1 },
  { key: 3, topic: 'Is this the end of the world?', votes: 0 }
];

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div key="homepage" className={styles.homepage}>
        <TopicForm />
        <TopicList data={ topics }/>
      </div>
    );
  }
}
