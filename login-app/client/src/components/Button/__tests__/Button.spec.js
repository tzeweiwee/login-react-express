import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  const title = 'Button';
  it('should render Button component with text', () => {
      const wrapper = shallow(<Button text={title} onClick={() => {}}/>);
      expect(wrapper).toHaveLength(1);
  });

  it('should match Button snapshot', () => {
    const wrapper = shallow(<Button text={title} onClick={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});
});
