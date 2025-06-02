import './styles.css'
import cartIcon from '../../../assets/icons/cart.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../app/store'

export const CartNoty = () => {
	const cart = useSelector((state: RootState) => state.item.cart)
	
	const count = Object.values(cart).reduce((acc, curr) => acc + curr.count, 0)

	return (
		<Link to="/Frontend/order" className="cartNotyContainer">
			<img className="cartNotyIcon" src={cartIcon} alt="cart" />
			<div className="cartNotyCount">{count}</div>
		</Link>
	)
}