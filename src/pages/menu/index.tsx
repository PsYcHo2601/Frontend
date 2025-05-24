import type { FC } from 'react'
import { type Item } from '../../mock'
import type { CartItem } from '../../App'
import { ItemCard } from './ItemCard'
import { CartNoty } from './CartNoty'
import './styles.css'

interface Props {
  cart: CartItem
  handleAddToCart: (item: Item) => void
  filteredItems: Item[]
  isLoading?: boolean
}

export const Menu: FC<Props> = ({ cart, handleAddToCart, filteredItems, isLoading }) => {
  if (isLoading) {
    return <div style={{ padding: 20 }}>Загрузка меню...</div>
  }

  return (
    <div className="mainContainer">
      {filteredItems.map(item => (
        <ItemCard key={item.id} item={item} handleAddToCart={handleAddToCart} />
      ))}
      <CartNoty cart={cart} />
    </div>
  )
}
