import React from 'react';
import PropTypes from 'prop-types';

import './form.styl';

const Form = ({
  onAddTask,
  onInputChange,
  inputValue,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddTask();
  };

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Ajoutez votre tâche"
        className="todo-input"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

Form.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Form;
