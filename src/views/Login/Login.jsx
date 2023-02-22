import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//context zustand
import { useStore } from "../../store/auth.js";
//login
import { loginRequest } from "../../api/auth.js";
export function Login() {
  const navigate = useNavigate();
  //Use Context
  const setToken = useStore((state) => state.setToken);

  //form data and update data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState(false);

  const handlerInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  //submit
  const submit = async (e) => {
    e.preventDefault();

    const resLogin = await loginRequest(formData);
    console.log("RES LOGIN ==>", resLogin.data.message);
    if (resLogin.data.token) {
      setToken(resLogin.data.token);
      console.log("Context guardado ==>", setToken);
      navigate("/Dashboard/Projects");
    }
    if (resLogin.data.message) {
      setMessage(resLogin.data.message);
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    }
  };
  return (
    <div>
      <div className="Atencion">
        <h2 className="">¡¡Atencion!!</h2>
        <p>
          Atencion este apartado es de uso explusivo para la gestion del
          porfolio, si deseas ver el panel de control deberas acceder como
          usuario Invitado, solo tendras permisos para leer pero no para
          modificar nada.
        </p>
        <div className="Invitado">
          username = "Invitado"
          <br />
          password = "invitado"
        </div>
      </div>

      <div className="formLoginContainer">
        <h2>Sing In</h2>
        <form className="formLogin" onSubmit={submit}>
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handlerInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handlerInputChange}
          />
          <button>Login</button>
        </form>
        {message && <div className="messageLogin">{message}</div>}
      </div>
    </div>
  );
}
