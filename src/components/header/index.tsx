import { Link } from 'react-router-dom'
import './styles.css'
import logo from '../../assets/icons/logo.svg'
import { SearchInput } from '../search-input'


export const Header = () => {
  return (
    <header className="headerContainer">
      <Link className="headerLinks" to="/"><img src={logo} alt="logo" /></Link>
      <SearchInput />
      <Link className="headerLinks" to="/order">order</Link>
    </header>
  )
}