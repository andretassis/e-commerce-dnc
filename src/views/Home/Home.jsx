/* eslint-disable react/prop-types */
import Nav from "../../components/Nav/Nav"
import './Home.scss'
import CardComponent from "../../components/CardComponent/CardComponent"
import Search from "../../components/Search/Search"

const Home = ({data}) => {

  return (
    <>
     <Nav />
     <Search />
     
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