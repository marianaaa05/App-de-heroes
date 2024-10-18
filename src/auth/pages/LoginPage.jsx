
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  // instancia
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', {
      replace: true 
    });
  }

  return (
    <div className="container mt-5"> 
      <h1 >Has click para acceder:</h1> 
      <hr />
      <button 
        className="btn btn-primary" 
        onClick={onLogin} 
      >
        Acceder 
      </button>
    </div>
  )
}
