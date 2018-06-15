import React from 'react';
import PropTypes from 'prop-types';

import Task from '~/components/Task';
import './list.styl';

const List = ({ tasks, taskActions }) => {
  const tasksJSX = tasks.map(task => (
    <Task
      {...task}
      {...taskActions}
      key={task.id}
    />
  ));

  return (
    <ul className="todo-list">
      {tasksJSX}
    </ul>
  );
};

List.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  taskActions: PropTypes.object.isRequired,
};

export default List;
