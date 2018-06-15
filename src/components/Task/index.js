import React from 'react';
import PropTypes from 'prop-types';
import TrashIcon from 'react-icons/lib/fa/trash-o';
import StarIcon from 'react-icons/lib/fa/star-o';
import classNames from 'classnames';

import './task.styl';

const Task = ({
  id,
  label,
  done,
  favorite,
  onToggleTask,
  onDeleteTask,
  onFavoriteTask,
}) => {
  const currentClassNames = classNames(
    'todo-task',
    {
      'todo-task--done': done,
      'todo-task--favorite': favorite,
    },
  );

  return (
    <li
      key={id}
      className={currentClassNames}
    >
      <input
        type="checkbox"
        checked={done}
        onChange={onToggleTask(id)}
      />
      {label}
      <TrashIcon
        className="task-delete"
        onClick={onDeleteTask(id)}
      />
      <StarIcon
        className="task-favorite"
        onClick={onFavoriteTask(id)}
      />
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onToggleTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onFavoriteTask: PropTypes.func.isRequired,
};

export default Task;
