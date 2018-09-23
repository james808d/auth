import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, selectV2 } from '@storybook/addon-knobs/react';

import '../css/main.css';
import '../css/colors.css';

import Button from '../components/button';
import Card from '../components/card';
import Input from '../components/input';
import InputGroup from '../components/input-group';
import Section from '../components/section';

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



const getThemeKnob = () => selectV2('Theme',{
	Light:'light',
	Accent:'accent',
	AccentLight:'accent-light',
	AccentLightFill:'accent-light-fill',
	AccentOutline:'accent-outline',
	Dark:'dark',
	DarkOutline: 'dark-outline',
	MediumOutline: 'medium-outline'
}, 'light');
const getDisabled = () => boolean('Disabled', false);
const getActive = () => boolean('Active', false);
const getRounded = () => boolean('Rounded', true);

const buttonProps = {
	passEvent: true,
	className: 'test',
	datakey: 'test-data-key'
};

const formikProps2 = {
	field: {
		name: 'test-name2',
		value: 'test value'
	},
	form: {
		touched:{},
		errors:{}
	},
	onFocus: action('input-focus'),
	theme: getThemeKnob(),
	rounded: getRounded()
};

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.add('with text', () => {
		return ( <Button rounded={getRounded()} {...buttonProps} active={getActive()} disabled={getDisabled()} onClick={ action('button-click') } theme={getThemeKnob()} >Test</Button> )
	})
	.add('with caret left', () => {
		return ( <Button rounded={getRounded()} {...buttonProps} active={getActive()} disabled={getDisabled()} onClick={ action('button-click') } theme={getThemeKnob()} showCaret>Test</Button> )
	})
	.add('with caret right', () => {
		return ( <Button rounded={getRounded()} {...buttonProps} active={getActive()} disabled={getDisabled()} onClick={ action('button-click') } theme={getThemeKnob()} showCaret caretDirection="right">Test</Button> )
	});

storiesOf('Card', module)
	.addDecorator(withKnobs)
	.add('with text', () => {
		const isFlex = boolean('Flex', false);
		const borders = boolean('Borders', true);
		const isRounded = boolean('Rounded', true);
		const margin = number('Margin', 0);
		return (
			<div style={{ display: isFlex ? 'flex' : 'block', padding:margin }}>
				<Card border={borders} className="hvr-float hvr-shadow" rounded={isRounded} flex={isFlex} margin={margin} theme={getThemeKnob()} maxWidth={boolean('MaxWidth', false)} >Test of card contents</Card>
				<Card border={borders} flex={isFlex} rounded={isRounded} margin={margin} theme={getThemeKnob()} maxWidth={boolean('MaxWidth', false)} >Test of card contents <span className="accent-outline mono">01234567890</span> </Card>
				<Card border={borders} flex={isFlex} rounded={isRounded} margin={margin} theme={getThemeKnob()} maxWidth={boolean('MaxWidth', false)} >Test of card contents</Card>
			</div>
		)
	})
;

storiesOf('Input', module)
	.addDecorator(withKnobs)
	.add('direct input', () => {

		this.value = "test";

		const updateValue = (e) => {
			console.log(e.target.value);
			this.value = e.target.value
		};

		return (<Input onChange={updateValue} rounded={getRounded()} onFocus={ action('input-focus')} value={this.value} theme={getThemeKnob()} />)
	})
	.add('with Formik', () => <Input rounded={getRounded()} onFocus={ action('input-focus')} {...formikProps} theme={getThemeKnob()} /> );


storiesOf('InputGroup', module)
	.addDecorator(withKnobs)
	.add('InputGroup', () => {
		const debug = boolean('Debug', false);
		const labelsOnTop = boolean('Labels on Top', false);
		return (
			<InputGroup inputProps={ formikProps2 } className={ debug ? "debug" : ""} hasValue clearValue={ () => {} } label="test label" labelsOnTop={labelsOnTop} errors={["this is an error"]} touched />
		);
	});

storiesOf('Section', module)
	.add('light', () => <Section className="light" >Test</Section>)
	.add('accent', () => <Section className="accent">Test</Section>);
