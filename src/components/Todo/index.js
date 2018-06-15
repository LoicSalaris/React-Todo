import React from 'react';
import PropTypes from 'prop-types';

import Form from '~/components/Form';
import Counter from '~/components/Counter';
import List from '~/components/List';
import initialTasks from '~/data/tasks';
import { getMax } from '~/utils/data';
import './todo.styl';

class Todo extends React.Component {
  state = {
    tasks: initialTasks,
    currentInputValue: '',
  }

  // evt de type 'change' sur l'input du form
  changeInput = (evt) => {
    this.setState({
      currentInputValue: evt.target.value,
    });
  }

  // evt de type 'submit' sur le form lui-même
  addTask = (evt) => {
    // Bloqué : il faut qu'on connaissance la valeur de l'input…
    // => on implémente une input contrôlée par React
    // Débloqué : elle est dans this.state.currentInputValue !
    const maxId = getMax(this.state.tasks);
    const newTask = {
      id: maxId + 1,
      label: this.state.currentInputValue,
      done: false,
    };
    // this.state.tasks.push(newTask);
    this.setState({
      tasks: [...this.state.tasks, newTask],
      currentInputValue: '',
    });
  }

  toggleTask = id => () => {
    // 1. On génère un **nouveau** tableau de tâches, avec .map
    const editedTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    // 2. On utilise ce nouveau tableau pour modifier le state de <Todo />
    this.setState({
      tasks: editedTasks,
    });
  }

  deleteTask = id => () => {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    // this.setState({
    //   tasks: tasks,
    // });
    this.setState({ tasks });
  }

  favoriteTask = id => () => {
    const tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        /* eslint-disable no-prototype-builtins */
        if (!task.hasOwnProperty('favorite')) {
          task.favorite = false;
        }
        task.favorite = !task.favorite;
      }
      return task;
    });
    this.setState({ tasks });
  }

  render() {
    const { currentInputValue: inputValue, tasks } = this.state;
    const nbTasksNotDone = tasks.filter(task => !task.done).length;
    const orderedTasks = [
      ...tasks.filter(t => !t.done && t.favorite),
      ...tasks.filter(t => !t.done && !t.favorite),
      ...tasks.filter(t => t.done),
    ];
    const taskActions = {
      onToggleTask: this.toggleTask,
      onDeleteTask: this.deleteTask,
      onFavoriteTask: this.favoriteTask,
    };

    return (
      <div className="todo">
        <Form
          onAddTask={this.addTask}
          onInputChange={this.changeInput}
          inputValue={inputValue}
        />
        <Counter count={nbTasksNotDone} />
        <List
          tasks={orderedTasks}
          taskActions={taskActions}
        />
      </div>
    );
  }
}

Todo.propTypes = {};

export default Todo;
