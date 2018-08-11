import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class InputField extends PureComponent {
    render () {
        const { name, labelText, value, onChange, type, placeholder } = this.props;
        console.log(this.props);
        return (
            <div className='inputContainer'>
                <label className='labelText'>{labelText}</label>
                <input name={name} type={type} className='inputField' placeholder={placeholder} value={value} onChange={onChange} />
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