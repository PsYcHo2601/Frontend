import type { FC } from 'react'
import type { CartItem } from '../../App'
import { OrderCard } from './order-card'
import './styles.css'
import cupOfCoffe from '../../assets/images/cup-of-coffe.png'
interface Props {
	cart: CartItem
}

export const Order: FC<Props> = ({ cart }) => {
	return (
		<div className="orderContainer">
			<OrderCard cart={cart} />
			<div className='orderDetailsContainer'>
				<img src={cupOfCoffe} alt="cup-of-coffe" />
			</div>
		</div>
	)
}
