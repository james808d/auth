import React from "react";
import Label from './label';

const Checkbox = ({ field, form, ...props }) => (
	<Label boldLabels={props.boldLabels}>
		<input
			type="checkbox"
			{ ...field }
			checked={field.value}
			style={{ marginRight: 6 }}
		/>
		{ props.label }
	</Label>
);

export default Checkbox;