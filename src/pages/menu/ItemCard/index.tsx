import type { FC } from 'react'
import type { Item } from '../../../mock'
import './styles.css'
import { Link } from 'react-router-dom'
import infoIcon from '../../../assets/icons/info.svg'

interface Props {
  item: Item
  handleAddToCart: (item: Item) => void
}

export const ItemCard: FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <div className="itemCardContainer">
      <Link className="itemCardInfo" to={`/item/${item.id}`}><img src={infoIcon} alt={item.name}/></Link>
      <img src={item.image} alt={item.name} />
      <span>{item.name}</span>
      <button className="itemCardButton" onClick={() => handleAddToCart(item)}>{`buy for ${item.price}rub`}</button>
    </div>
  )
}