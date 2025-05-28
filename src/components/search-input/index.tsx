import './styles.css'
import searchIcon from '../../assets/icons/search.svg'
import type { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../../slices'

interface Props {
	className?: string
}

export const SearchInput: FC<Props> = ({ className }) => {
	const dispatch = useDispatch()

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchQuery(e.target.value))
	}

	return (
		<div className={`searchInputContainer ${className}`}>
			<img src={searchIcon} alt="search" />
			<input 
				placeholder="Search" 
				onChange={handleSearchChange}
			/>
		</div>
	)
}