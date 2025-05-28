
import { ItemCard } from './ItemCard'
import { CartNoty } from './CartNoty'
import './styles.css'
import { SearchInput } from '../../components/search-input'
import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'

export const Menu = () => {
  const filteredItems = useSelector((state: RootState) => state.item.items)

  return (
    <div className="menu">
      <SearchInput className='menuSearchInput' />
      <div className='menuContainer'>
        {filteredItems.map(item => (
          <ItemCard key={item.id} item={item}/>
        ))}
      </div>
      <CartNoty />
    </div>
  )
}
