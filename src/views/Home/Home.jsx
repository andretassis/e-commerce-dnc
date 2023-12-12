/* eslint-disable react/prop-types */
import Nav from "../../components/Nav/Nav"
import searchIcon from '../../assets/search.svg'
import favoriteIcon from '../../assets/favorite.svg'
import userIcon from '../../assets/user.svg'
import './Home.scss'
import CardComponent from "../../components/CardComponent/CardComponent"

const Home = ({data}) => {

  return (
    <>
     <Nav />
     <div className="home">
      <label className="home__input">
        <img className="home__--search-icon" src={searchIcon} alt="Search Icon" />
        <input placeholder="O que você está procurando?" />
      </label>
        <img className="home--user-icon"src={userIcon} alt="User Icon" />
        <img src={favoriteIcon} alt="Favorite Icon" />
     </div>
      <div className="home__products">
        {data.map((product) => 
          <CardComponent 
            key={product.id} 
            data={product}
        />)}
      </div>
      
    </>
  )
}

export default Home