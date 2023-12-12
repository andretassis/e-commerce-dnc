/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
import Nav from "../../components/Nav/Nav"
import ProductDetail from "../../components/ProductDetail/ProductDetail"
import Search from "../../components/Search/Search"
import './Cart.scss'

const Cart = ({data}) => {

  // utilizei o productId definido na rota do main com o useParams para pegar a rota dinâmica;
  // criei o selectedProduct com o método "find" que retornará, nesse caso, o primeiro produto que tenha o id = ao productId
  const {productId} = useParams()
  const selectedProduct = data.find((product) => product.id == productId);


  return (
    <>
      <Nav />
      <Search />
      <ProductDetail data={selectedProduct} />
    </>
  )
}

export default Cart