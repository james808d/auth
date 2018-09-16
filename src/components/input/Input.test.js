import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Input from './Input';

const formikProps = {
	field: {
		name: 'test-name',
		value: 'test value'
	},
	form: {
		touched:{},
		errors:{}
	}
};

describe('Input Component', () => {
	it('works without formik', () => {
		const input = shallow(<Input value="test value" />);
		expect(input.props().value).toEqual('test value');
	});
	it('works with formik', () => {
		const input = shallow(<Input {...formikProps} />);
		expect(input.props().value).toEqual('test value');
	});
});