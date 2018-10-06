const plans = {
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

export default plans;