import React from 'react';
import cn from "classnames";

import { LinkButton } from '../button';
import Card from './index';
import Flex from '../flex';

import styles from './Card.module.css';
import tiers from '../../constants/plans';

const PlanCard = ({ onClick, tier }) =>{

	const notAvailable = !tiers[tier].available;

	const c = cn(
		styles.shadow,
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
		<Card theme="white" margin="8px" flex className={c} padding={false} style={style} to={`/plans/${tier}`} disabled={notAvailable}>
			<Flex grow={0} basis={160} className={ styles.top } alignItems="center" justifyContent="center" direction="column">

				<div className={ styles.label }>{tiers[tier].label}</div>

				<div className={ styles.price }>
					<div className={ styles.priceLg}>${tiers[tier].price}</div>
					per year
				</div>
			</Flex>

			<Flex grow={1} className={ styles.bottom } alignItems="stretch" justifyContent="stretch" direction="column">
				<div className={ styles.features }>
					<ul>
						{
							tiers[tier].features.map((item, i) => <li key={i}>{item}</li>)
						}
					</ul>
				</div>

				<Flex grow={0} className={ styles.selectPlan } alignItems="stretch" justifyContent="stretch">
					<LinkButton to={`/plans/${tier}`} disabled={notAvailable} theme="accent" className={ styles.selectPlanBtn } style={{ flex: 1 }}>
						{
							notAvailable ? "Available Soon" : "Select"
						}
					</LinkButton>
				</Flex>
			</Flex>
		</Card>
	);
};

export default PlanCard;