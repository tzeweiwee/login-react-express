import React from 'react';
import { shallow } from 'enzyme';
import InputField from '../InputField';

const inputProps = {
  labelText: "label",
  type:"text",
  value: '',
  onChange: () => { },
  placeholder: 'placeholder'
}

describe('InputField', () => {
  it('should render a textbox component', () => {
      const wrapper = shallow(<InputField {...inputProps}/>);
      expect(wrapper).toHaveLength(1);
  });

  it('should match InputField snapshot', () => {
    const wrapper = shallow(<InputField {...inputProps}/>);
    expect(wrapper).toMatchSnapshot();
});
});
