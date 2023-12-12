/* eslint-disable react/prop-types */

import './ProductDetail.scss'

const ProductDetail = ({data}) => {
  return (
    <section className="detail">  
        <section className="detail__image">
            <div className="detail__image--card">
                <img src={data.imgPathDetail} alt={data.title} />
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


{/* Como no mock a prop colors também era uma lista e eu queria a (,) entre os elementos */}
{/* Fiz o primeiro IF ternário que se o array de colors tiver só um elemento, ele pegará esse elemento */}
{/* Se não, ele fará um outro map com outro IF ternário */}
{/* Neste segundo, se o index do elemento + 1 for = ao tamanho do array, ele não adicionará a vírgula */}
{/* Se não, ele adiciona a vírgula depois do nome da cor */}
            <div className="detail__info--price">
                <p className="detail__info--price-p">{data.price}</p>
                <p>Cor: {" "}
                {data.colors.length === 1 
                    ? data.colors.map((color, index) => (
                            <span key={index}>{color}</span>
                        )) 
                    : data.colors.map((color, index) => 
                    index + 1 === data.colors.length 
                    ? (<span key={index}>{color}</span>) 
                    : (<span key={index}>{color}, </span>)
                    )}
                </p>

{/* Para criar o cubinho colorido dinamico, faz um map pelo array de colors */}
{/* Para cada color ele criará uma div em que a cor de fundo é justamente o nome da color */}
                <div className="detail__info--color">
                {data.colors.map((color, index) => (
                <div
                    key={index}
                    style={{
                        backgroundColor: color,
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        border: "1px solid rgba(122, 122, 122, 0.5)",
                        cursor: "pointer",
                    }}
                ></div>))}

                </div>
                <span>Tamanho:</span>

{/* Para criar o cubinho de tamanho dinâmico, segue a mesma lógica do cubo de cores */}            
                <div className="detail__info--size">
                {data.sizes.map((size, index) => (
                <div
                key={index}
                style={{
                    border: "1px solid black",
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    padding: "8.5px",
                }}
                >{size}</div>))}
                </div>
            </div>

            <div>
                <button>Finalizar compra</button>
            </div>
        </section>
    </section>
  )
}

export default ProductDetail