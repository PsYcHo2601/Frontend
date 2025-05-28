import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {registerSW} from "virtual:pwa-register";
import { Layout } from '../components/layout/Layout'
import { Menu } from '../pages/menu'
import { MenuItem } from '../pages/item-description'
import { useEffect, useState } from 'react'
import { Order } from '../pages/order'
import { fetchItems } from '../api/fetchItems'
import { login } from '../api/auth'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store, type RootState } from './store'
import { setIsMock, setItems } from '../slices'

export const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const isMock = useSelector((state: RootState) => state.item.isMock)

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      registerSW()
    }


    const init = async () => {
        await login('nameless@dao.ru', '000')
        const { items, isMock } = await fetchItems()
        dispatch(setItems(items))
        dispatch(setIsMock(isMock))
        setIsLoading(false)
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
			  <Menu />
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
		  element: <Order />
		}
	  ]
	}
  ])
  

  return (
      <div className="container">
        <RouterProvider router={router} />
      </div>
  )
}
