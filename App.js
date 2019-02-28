import React, { Component } from 'react';
import TodoList from './TodoList';
import store from './TodoStore';

export default class App extends Component {
  render() {
    return <TodoList store={store}/>
  }
}