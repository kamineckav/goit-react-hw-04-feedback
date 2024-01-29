import React, { useState } from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleMouseDown = option => {
    setClickedButton(option);
  };

  const handleMouseUp = option => {
    setClickedButton(null);
    onLeaveFeedback(option);
  };

  const handleMouseLeave = () => {
    setClickedButton(null);
  };

  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={`${styles['feedback-btn']} ${styles[option]} ${
            clickedButton === option ? styles.clicked : ''
          }`}
          onMouseDown={() => handleMouseDown(option)}
          onMouseUp={() => handleMouseUp(option)}
          onMouseLeave={handleMouseLeave}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
