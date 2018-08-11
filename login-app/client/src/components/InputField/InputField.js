import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.css';

export default class InputField extends PureComponent {
    render () {
        const { name, labelText, value, onChange, type, placeholder } = this.props;
        return (
            <div className={styles.inputContainer}>
                <label className={styles.labelText}>{labelText}:</label>
                <input name={name} type={type} className={styles.inputField} placeholder={placeholder} value={value} onChange={onChange} />
            </div>
        );
    }
};

InputField.defaultProps = {
  type: "text"
};

InputField.propTypes = {
    onChange: PropTypes.func.isRequired,
    labelText: PropTypes.string.isRequired,
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
};