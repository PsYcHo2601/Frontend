import type { FC } from 'react'
import type { CartItem } from '../../../App'

import './styles.css'

interface Props {
	cart: CartItem
}

export const OrderCard: FC<Props> = ({ cart }) => {

	const totalPrice = Object.values(cart).reduce((acc, value) => acc + value.price * value.count, 0)
	return (
		<div className="orderCardContainer">
			<div className="orderCardHeaderContainer">
			<div className="orderCardHeader">Order</div>
			<div className="orderCardHeaderInfo">
				<div className="orderCardHeaderInfoItem">
					<div className="orderCardItemName">Name:</div>
					<div className="orderCardItemCount">Count:</div>
					<div className="orderCardItemPrice">Price:</div>
				</div>
			</div>
			<div className="orderCardBody">
				{Object.entries(cart).map(([key, value]) => (
					<div className="orderCardItem" key={key}>
						<div className="orderCardItemName">{value.name}</div>
						<div className="orderCardItemCount">{`X${value.count}`}</div>
						<div className="orderCardItemPrice">{`${value.price}RUB`}</div>
					</div>
				))}
			</div>
			</div>
			<div className="orderCardFooterContainer">
				TOTAL PRICE: {totalPrice}RUB
			</div>
		</div>
	)
}