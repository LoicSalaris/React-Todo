import React from 'react';
import PropTypes from 'prop-types';

import './counter.styl';

const Counter = ({ count }) => {
  let message = '';
  switch (count) {
    case 0:
      message = 'Aucune tâche';
      break;

    case 1:
      message = '1 tâche en cours';
      break;

    default:
      message = `${count} tâches en cours`;
  }

  return (
    <div className="todo-counter">
      {message}
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
