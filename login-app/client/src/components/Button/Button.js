import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({ type, text, onClick }) => {
    return (
        <div className={styles.buttonContainer}>
          <input className={styles.button} type={type} value={text} onClick={onClick} />
        </div>
    );
};

Button.defaultProps = {
    type: 'button'
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default Button;