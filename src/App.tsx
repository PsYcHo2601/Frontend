import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from './components/layout/Layout'
import { Menu } from './pages/menu'
import { MenuItem } from './pages/item-description'
import { useState } from 'react'
import { ITEM_MOCK, type Item } from './mock'
import { Order } from './pages/order'

export interface CartItem {
	[key: string]: {
		count: number,
		price: number,
		name: string,
	}
}

export const App = () => {
	const [cart, setCart] = useState<CartItem>({})

	const [filteredItems] = useState(ITEM_MOCK.result)

	const handleAddToCart = (item: Item) => {
		setCart(prev => ({...prev, [item.id]: { name: item.name, count: prev[item.id]?.count + 1 || 1, price: prev[item.id]?.price + item.price || item.price}}))
	}

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Menu filteredItems={filteredItems} cart={cart} handleAddToCart={handleAddToCart} />,
					shouldRevalidate: () => true
				},
				{
					path: 'item/:id',
					element: <MenuItem />
				},
				{
					path: 'order',
					element: <Order cart={cart} />
				}
			]
		}
	])
	
	return (
		<div key={JSON.stringify(cart)} className="container">
			<RouterProvider router={router} />
		</div>
	)
}
