import logoDNC from "../../assets/logo.svg"
import './Header.scss'

const Header = () => {
  return (
    <>
        <div className="header">
            <img src={logoDNC} alt="Logo DNC" />
        </div>        
    </>
  )
}

export default Header