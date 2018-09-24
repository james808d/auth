import React from 'react';
import cn from "classnames";

import Button from '../button';
import Card from './index';
import Flex from '../flex';

import './plan-card.css';

const tiers = {
	advanced: {
		available: false,
		label: "Advanced",
		price: 16,
		features:[
			"Unlimited Inbound Messages Per Day",
			"250 Outbound Messages Per Day",
			"50 Recipients Per Outbound Message",
			"50MB of Message Attachment Size",
			"10GB of Account Storage",
			"Secure Webmail Access",
			"Secure iOS & Android App Access",
		]
	},
	basic: {
		available: true,
		label:"Basic",
		price: 12,
		features:[
			"Unlimited Inbound Messages Per Day",
			"100 Outbound Messages Per Day",
			"25 Recipients Per Outbound Message",
			"10MB of Message Attachment Size",
			"5GB of Account Storage",
			"Secure Webmail Access (desktop & mobile)"
		]
	},
	enterprise: {
		available: false,
		label: "Enterprise",
		price: 24,
		features:[
			"Unlimited Inbound Messages Per Day",
			"500 Outbound Messages Per Day",
			"100 Recipients Per Outbound Message",
			"100MB of Message Attachment Size",
			"25GB of Account Storage",
			"Custom Domain Address",
			"Secure Webmail Access",
			"Secure iOS & Android App Access",
			"Secure IMAP, POP & SMTP Access",
			"Administrator's User Management Panel"
		]
	}
};

const PlanCard = ({ tier }) =>{

	const notAvailable = !tiers[tier].available;

	const c = cn(
		"plan-card",
		{
			"not-available": notAvailable
		}
	);

	const style = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'stretch'
	};

	return (
		<Card theme="white" margin="8px" flex className={c} padding={false} style={style}>

			<Flex grow={0} basis={160} className="plan-card-top" alignItems="center" justifyContent="center" direction="column">

				<div className="plan-label">{tiers[tier].label}</div>

				<div className="plan-price">
					<div className="plan-price-lg">${tiers[tier].price}</div>
					per year
				</div>
			</Flex>

			<Flex grow={1} className="plan-card-bottom" alignItems="stretch" justifyContent="stretch" direction="column">
				<div className="plan-features">
					<ul>
						{
							tiers[tier].features.map(i => <li>{i}</li>)
						}
					</ul>
				</div>

				<Flex grow={0} className="select-plan" alignItems="stretch" justifyContent="stretch">
					<Button disabled={notAvailable} theme="accent" className="select-plan-btn" style={{ flex: 1 }}>
						{
							notAvailable ? "Available Soon" : "Select"
						}
					</Button>
				</Flex>
			</Flex>
		</Card>
	);
};

export default PlanCard;