import type { FC } from 'react'
import type { CartItem } from '../../../app/App'

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
					<span>Name:</span>
					<span>Count:</span>
					<span>Price:</span>
				</div>
			</div>
			<div className="orderCardBody">
				{Object.entries(cart).map(([key, value]) => (
					<div className="orderCardItem" key={key}>
						<span>{value.name}</span>
						<span>{`X${value.count}`}</span>
						<span>{`${value.price}RUB`}</span>
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