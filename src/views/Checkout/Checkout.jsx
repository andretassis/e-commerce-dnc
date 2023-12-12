/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import './Checkout.scss'

const Checkout = ({data}) => {
  const {payId} = useParams()
  const selectedProduct = data.find((product) => product.id == payId)


  return (
    <>
    <Header />
    <section className="checkout">
    <section className="checkout__left">
      <div className="checkout__left--info">
        <label>Nome:</label>
        <input placeholder="Nome completo" className="checkout--input-text"></input>
        <label>Endereço de entrega:</label>
        <input placeholder="Endereço de entrega" className="checkout--input-text"></input>
      </div>

      <div className="checkout__left--pay">
        <span>Forma de pagamento:</span>
        <div className="pay--type">
        <input type="checkbox"></input>
        <label>Pix</label>        
        </div>
        <div className="pay--type">
        <input type="checkbox"></input>
        <label>Boleto</label>        
        </div>
        <div className="pay--type">
        <input type="checkbox"></input>
        <label>Cartão de crédito</label>        
        </div>
      </div>
      <Link to="/home"><button>Enviar pedido</button></Link>
    </section>

    <section className="checkout__right">
      <h3>Resumo do pedido:</h3>
      <div className="checkout__right--products">
        <p>Produtos:</p>
        <p className="product--name">{selectedProduct.title}</p>
        <p><strong>{selectedProduct.price}</strong></p>
      </div>
      <hr />
      <div className="checkout__right--total">
        <p>Total:</p>
        <p><strong>{selectedProduct.price}</strong></p>
      </div>
    </section>
    </section>
    </>
  )
}

export default Checkout