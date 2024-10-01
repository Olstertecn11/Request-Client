import '../../assets/styles/Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {


  const empty_user = { username: '', password: '' };
  const [user, setUser] = useState(empty_user);
  const history = useNavigate();

  const handleLogin = () => {
    if (user.username === "admin" && user.password === "iasdcentral") {
      history('/admin/dashboard');
    }
    else {
      alert("Credenciales Incorrectas");
    }
  }

  const handleUser = (e) => {
    setUser(values => ({ ...values, [e.target.name]: e.target.value }));
  }


  return (
    <div className="login-container">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="card mt-4 p-4 login-card">
              <h2 className="text-center">Login</h2>
              <div className="form-group">
                <label htmlFor="" className='ml-1'>Usuario</label>
                <input type="text" placeholder='Olivers11' className="form-control" name="username" value={user.username} onChange={handleUser} />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="" className='ml-1'>Usuario</label>
                <input type="password" placeholder='************' className="form-control" value={user.password} name="password" onChange={handleUser} />
              </div>
              <a href="" className="link-login">Olvidé mi contraseña</a>
              <button className='btn btn-login' onClick={handleLogin}>Entrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
