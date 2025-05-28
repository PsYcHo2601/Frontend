import type { FC } from 'react'
import './styles.css'
import { useParams } from 'react-router-dom'
import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'

export const MenuItem: FC = () => {
  
  const params = useParams()

  const currentId = params.id ?? -1

  const items = useSelector((state: RootState) => state.item.items)
  const item = items.find((item) => item.id === +currentId)

  if (!item) {
    return <div>Item not found</div>
  }

  const { name, image, description } = item

  return (
    <div className="menuItemContainer">
      <img className="menuItemImage" src={image} alt={name} />
      <div className="menuItemInfo">
        <h1 className="menuItemName">{name}</h1>
        <p className="menuItemDescription">{description}</p>
      </div>
    </div>
  )
}