import type { CartItem } from '../../App'
import { ITEM_MOCK, type Item } from '../../mock'
import { ItemCard } from "./ItemCard"
import './styles.css'
import type { FC } from 'react'
import { CartNoty } from './CartNoty'
interface Props {
  cart: CartItem
  handleAddToCart: (item: Item) => void
  filteredItems: Item[]
}

export const Menu: FC<Props> = ({ cart, handleAddToCart, filteredItems }) => {
  return (
    <div className="mainContainer">
      {filteredItems?.map((item) => (
        <ItemCard key={item.id} item={item} handleAddToCart={handleAddToCart} />
      ))}
      <CartNoty cart={cart} />
    </div>
  )
}
