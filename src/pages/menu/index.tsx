import { ItemCard } from './ItemCard'
import { CartNoty } from './CartNoty'
import './styles.css'
import { SearchInput } from '../../components/search-input'
import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'

export const Menu = () => {
  const items = useSelector((state: RootState) => state.item.items)
  const searchQuery = useSelector((state: RootState) => state.item.searchQuery)

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
