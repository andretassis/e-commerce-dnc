
import './ProductDetail.scss'

const ProductDetail = () => {
  return (
    <section className="detail">  
        <section className="detail__image">
            <div className="detail__image--card">
                <img src='../../../public/product-1.png' alt='ERRO' />
                <p className="detail__image--p">Cropped manga preta |  by DNC</p>
            </div>
            <div>    
                <h4>Descrição</h4>
                <p className="detail__text--p">Cropped manga preta |  by DNC</p>
                <hr />
            </div>
        </section>

        <section className="detail__info">
            <div>
                <h3>Informações Sobre o Produto</h3>
                <hr />
            </div>

            <div className="detail__info--price">
                <p>R$ 150,00</p>
                <span>Cor: preta</span>
                <div className="detail__info--color">P</div>
                <span>Tamanho:</span>
                <div className="detail__info--size">G</div>
            </div>

            <div>
                <button>Finalizar compra</button>
            </div>
        </section>
    </section>
  )
}

export default ProductDetail