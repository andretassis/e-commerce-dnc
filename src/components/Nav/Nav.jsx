import logoDNC from "../../assets/logo.svg"
import cartIcon from "../../assets/cart.svg"
import './Nav.scss'

const Nav = () => {
  return (
    <>
        <div className="nav">
            <img className="nav__logo" src={logoDNC} alt="Logo DNC" />
            <ul>
                <li>Home</li>
                <li>Novidades</li>
                <li>Feminino</li>
                <li>Masculino</li>
                <li>Atendimento</li>
            </ul>
            <div className="nav__cart">
                <p>Meu Carrinho</p>
                <img src={cartIcon} alt="Carrinho" />
            </div>     
        </div>   
    </>
  )
}

export default Nav