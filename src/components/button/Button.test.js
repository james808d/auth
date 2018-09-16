import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Button from './Button';

describe('Button Component', () => {
	it('style prop overrides default style', () => {
		const button = shallow(<Button>test</Button>);
		expect(button.text()).toEqual('test');
	});
});