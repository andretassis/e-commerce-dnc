import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import './Login.scss'

const Login = () => {
  return (
    <div className="login">
        <Header />
        <h1>Acesse com seu login ou cadastre-se!</h1>
        <h2>você pode entrar com o seu CPF</h2>
        <div className="login__inputs">
            <label>Digite seu CPF</label>
            <input placeholder="Nome completo"></input>
            <label>Senha</label>
            <input placeholder="**********"></input>
            <Link to="/home"><button>Entrar</button></Link> 
        </div>
    </div>
  )
}

export default Login