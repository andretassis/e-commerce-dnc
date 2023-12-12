
import searchIcon from '../../assets/search.svg'
import favoriteIcon from '../../assets/favorite.svg'
import userIcon from '../../assets/user.svg'
import './Search.scss'

const Search = () => {
  return (
    <div className="search">
      <label className="search__input">
        <img className="search__search-icon" src={searchIcon} alt="Search Icon" />
        <input placeholder="O que você está procurando?" />
      </label>
        <img className="search__user-icon"src={userIcon} alt="User Icon" />
        <img src={favoriteIcon} alt="Favorite Icon" />
     </div>
  )
}

export default Search




