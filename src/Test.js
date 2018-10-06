import React from 'react';

const Test = ({ authentication }) =>
	<div>
		<h2>Protected Page</h2>
		Logged in: { authentication.loggedIn }
		{Object.keys(authentication.user).map(function(key) {
			return <div>Key: {key}, Value: {authentication.user[key]}</div>;
		})}
	</div>;

export default Test;