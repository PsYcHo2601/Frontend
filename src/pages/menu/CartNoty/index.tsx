import './styles.css'
import cartIcon from '../../../assets/icons/cart.svg'
import type { FC } from 'react'
import type { CartItem } from '../../../App'
import { Link } from 'react-router-dom'
interface Props {
	cart: CartItem
}

export const CartNoty: FC<Props> = ({ cart }) => {
	const count = Object.values(cart).reduce((acc, curr) => acc + curr.count, 0)

	return (
		<Link to="/order" className="cartNotyContainer">
			<img className="cartNotyIcon" src={cartIcon} alt="cart" />
			<div className="cartNotyCount">{count}</div>
		</Link>
	)
}