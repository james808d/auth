import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, selectV2 } from '@storybook/addon-knobs/react';
import { linkTo } from '@storybook/addon-links';

import { Button as DemoButton, Welcome } from '@storybook/react/demo';

import '../css/main.css';
import '../css/colors.css';

import Button from '../components/button/Button';
import Input from '../components/input/Input';
import Section from '../components/section/Section';

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

const getThemeKnob = () => selectV2('Theme',{ Light:'light', Accent:'accent', Dark:'dark' }, 'light');
const getDisabled = () => boolean('Disabled', false);
const getActive = () => boolean('Active', false);

const buttonProps = {
	passEvent: true,
	className: 'test',
	datakey: 'test-data-key'
};

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.add('with text', () => {
		return ( <Button {...buttonProps} active={getActive()} disabled={getDisabled()} onClick={ action('button-click') } theme={getThemeKnob()} >Test</Button> )
	})
	.add('with caret left', () => {
		return ( <Button {...buttonProps} active={getActive()} disabled={getDisabled()} onClick={ action('button-click') } theme={getThemeKnob()} showCaret>Test</Button> )
	})
	.add('with caret right', () => {
		return ( <Button {...buttonProps} active={getActive()} disabled={getDisabled()} onClick={ action('button-click') } theme={getThemeKnob()} showCaret caretDirection="right">Test</Button> )
	});

storiesOf('Input', module)
	.addDecorator(withKnobs)
	.add('direct input', () => {
		const value = text('Value', 'direct test value');
		return (<Input onFocus={ action('input-focus')} value={value} theme={getThemeKnob()} />)
	})
	.add('with Formik', () => <Input onFocus={ action('input-focus')} {...formikProps} theme={getThemeKnob()} /> );

storiesOf('Section', module)
	.add('light', () => <Section className="light" >Test</Section>)
	.add('accent', () => <Section className="accent">Test</Section>);
