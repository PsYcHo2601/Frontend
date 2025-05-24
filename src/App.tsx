import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from './components/layout/Layout'
import { Menu } from './pages/menu'
import { MenuItem } from './pages/item-description'
import { useEffect, useState } from 'react'
import { type Item } from './mock'
import { Order } from './pages/order'
import { fetchItems } from './api/fetchItems'
import { login } from './api/auth'

export interface CartItem {
  [key: string]: {
    count: number,
    price: number,
    name: string,
  }
}

export const App = () => {
  const [cart, setCart] = useState<CartItem>({})
  const [items, setItems] = useState<Item[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isMock, setIsMock] = useState(false)

  const handleAddToCart = (item: Item) => {
    setCart(prev => ({
      ...prev,
      [item.id]: {
        name: item.name,
        count: prev[item.id]?.count + 1 || 1,
        price: prev[item.id]?.price + item.price || item.price
      }
    }))
  }

  useEffect(() => {
    const init = async () => {
      try {
        const success = await login('nameless@dao.ru', '000')
        if (success) {
          console.log('🟢 Logged in successfully')
        } else {
          console.warn('🔴 Login failed — using fallback')
        }

        const { items, isMock } = await fetchItems()
        setItems(items)
        setIsMock(isMock)
        console.log('DATA fetchItems:', items)
      } catch (error) {
        console.error('Init error:', error)
      } finally {
        setIsLoading(false)
      }
    }

    init()
  }, [])

  if (isLoading) {
    return <div style={{ padding: 20 }}>Загрузка меню...</div>
  }


const router = createBrowserRouter([
	{
	  path: '/',
	  element: <Layout />,
	  children: [
		{
		  index: true,
		  element: (
			<>
			  {isMock && (
				<div style={{ padding: '10px', color: 'orange' }}>
				  ⚠️ Используются мок-данные (сервер недоступен)
				</div>
			  )}
			  <Menu
				filteredItems={items}
				cart={cart}
				handleAddToCart={handleAddToCart}
				isLoading={isLoading} // 👈 теперь передаём внутрь
			  />
			</>
		  ),
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
