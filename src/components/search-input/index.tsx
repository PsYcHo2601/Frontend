import './styles.css'
import searchIcon from '../../assets/icons/search.svg'
import type { FC } from 'react'

interface Props {
	className?: string
}

export const SearchInput: FC<Props> = ({ className }) => {

	return (
		<div className={`searchInputContainer ${className}`}>
			<img src={searchIcon} alt="search" />
			<input placeholder="Search" />
		</div>
	)
}