import { OrderCard } from './order-card'
import './styles.css'
import cupOfCoffe from '../../assets/images/cup-of-coffe.png'
import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'

export const Order = () => {

	const cart = useSelector((state: RootState) => state.item.cart)


	return (
		<div className="orderContainer">
			<OrderCard cart={cart} />
			<div className='orderDetailsContainer'>
				<img className='orderDetailsImage' src={cupOfCoffe} alt="cup-of-coffe" />
			</div>
		</div>
	)
}
