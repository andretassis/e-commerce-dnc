/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './CardComponent.scss'

const CardComponent = ({data}) => {

  return (
    <div className="card">
        <img src={data.imgPathDetail} alt={data.title} />
        <p>{data.title}</p>
        <Link to={`/products/${data.id}`}> <button>Comprar Look</button></Link>
    </div>
  )
}

export default CardComponent