/* eslint-disable react/prop-types */

import './ProductDetail.scss'

const ProductDetail = ({data}) => {
  return (
    <section className="detail">  
        <section className="detail__image">
            <div className="detail__image--card">
                <img src={data.imgPathDetail} alt='ERRO' />
                <p className="detail__image--p">{data.title}</p>
            </div>
            <div>    
                <h4>Descrição</h4>
                <p className="detail__text--p">{data.title}</p>
                <hr />
            </div>
        </section>

        <section className="detail__info">
            <div>
                <h3>Informações Sobre o Produto</h3>
                <hr />
            </div>

            <div className="detail__info--price">
                <p>{data.price}</p>
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