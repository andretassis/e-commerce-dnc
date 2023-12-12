import Header from "../../components/Header/Header"
import './Checkout.scss'

const Checkout = () => {
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
      <button>Enviar pedido</button>
    </section>

    <section className="checkout__right">
      <h3>Resumo do pedido:</h3>
      <div className="checkout__right--products">
        <p>Produtos:</p>
        <p><strong>R$ 150,00</strong></p>
      </div>
      <hr />
      <div className="checkout__right--total">
        <p>Total:</p>
        <p><strong>R$ 150,00</strong></p>
      </div>
    </section>
    </section>
    </>
  )
}

export default Checkout