import { Link } from 'react-router-dom'
import { useState } from 'react'
import './styles.css'
import logo from '../../assets/icons/logo.svg'
import { SearchInput } from '../search-input'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="headerContainer">
      <Link className="headerLinks" to="/"><img src={logo} alt="logo" /></Link>
      <div className="desktopNav">
        <SearchInput />
        <Link className="headerLinks" to="/order">order</Link>
      </div>
      <button className="burgerMenu" onClick={toggleMenu}>
        <span className={`burgerLine ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`burgerLine ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`burgerLine ${isMenuOpen ? 'open' : ''}`}></span>
      </button>
      <div className={`mobileMenu ${isMenuOpen ? 'open' : ''}`}>
        <Link className="mobileLink" to="/order" onClick={toggleMenu}>order</Link>
      </div>
    </header>
  )
}
