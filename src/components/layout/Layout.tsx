import { Header } from '../header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../footer'
import './styles.css'

export const Layout = () => {
  return (
    <div className='layoutContainer'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}