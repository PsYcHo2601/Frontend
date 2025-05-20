import './styles.css'
import searchIcon from '../../assets/icons/search.svg'

export const SearchInput = () => {
	return (
		<div className="searchInputContainer">
			<img src={searchIcon} alt="search" />
			<input placeholder="Search" />
		</div>
	)
}